#' formulate question
#'
#' This function will parse the question data stored within a list, match the question type
#' against the appropriate module functions, create the user interface element in it's default
#' state and return a list of components.
#'
#' @param question a list that describes the content of the question
#' @param default_response a named list component that contains the initialising value for the question
#' @param ns a namespacing function, typically as returned by shiny::NS
#' @return a named list of question components
formulate_question = function(question, default_response, ns) {
  # find the appropriate module funcs for this question type
  func_pair = switch(
    question$type,
    "multiple choice" = list(ui = radio_group_module_ui, server = radio_group_module_server),
    "grouped slider" = list(ui = sliders_group_module_ui, server = sliders_group_module_server),
    "slider" = list(ui = text_slider_pair_module_ui, server = text_slider_pair_module_server),
    "non-numeric slider" = list(ui = text_slider_module_ui, server = text_slider_module_server),
    stop(glue::glue("No UI layout functions found for type {question$type}."))
  )
  # formulate inputs to ui func
  content = switch(
    question$type,
    "slider" = question$extra,
    "grouped slider" = question$detail,
    "multiple choice" = question$detail,
    "non-numeric slider" = NULL,
  )

  label = switch (
    question$type,
    "slider" = NULL,
    "grouped slider" = question$options,
    "multiple choice" = question$options,
    "non-numeric slider" = question$options
  )

  # generate an id based on the question and part number
  uniqueid = if(is.null(question$part)) question$node else paste(question$node, question$part, sep = "-")
  # build the inputs to the function UI
  f_input = list(
    id = ns(uniqueid),
    state = default_response[[question$node]],
    content = content,
    label = label
  )

  # build the inputs for the serverside
  server_args = switch(
    question$type,
    "multiple choice" = list(state = default_response[[question$node]]),
    "grouped slider" = list(state = default_response[[question$node]]) ,
    "slider" = list(state = default_response[[question$node]]),
    "non-numeric slider" = list(state = default_response[[question$node]]),
    stop(glue::glue("No module server functions found for type {question$type}."))
  )

  # create the user interface elements
  ui_el = do.call(func_pair$ui, f_input)
  list(id = uniqueid, ui_el = ui_el, server_func = func_pair$server, server_args = server_args)
}

#' create question block
#'
#' Given a list of questions and associate default responses, create all
#' lists of question components
#'
#' @param questions A named list of question data
#' @param default_response A named list of default response values for the questions
#' @param ns A namespacing object, typically created by shiny::NS
#' @return a list of all question data
create_question_block = function(questions, default_response = NA, ns) {
  block = list()
  counter = 1
  for(q in questions) {
    node = q$node
    part = q$part
    print(node)
    print(part)
    if(is.null(part)) {
      block[[counter]] = formulate_question(q, default_response[node], ns)
    }else { # multi part question
      intermediate_response = default_response[[node]][part] %>% setNames(node)
      block[[counter]] = formulate_question(q, intermediate_response, ns)
    }
    counter = counter + 1
  }
  return(block)
}

#' questions module ui
#'
#' Main module user interface for the combination of questions. All UI elements are built and rendered
#' on initialisation, sequencing through the questions is done by showing and hiding the sequence of
#' individual UI elements.
#'
#' @importFrom markdown markdownToHTML
#' @param id A unique identifier for the module, required by all shiny modules
#' @question_data A named list of question data
#' @default_response A named list of default response values
#' @is_policy boolean, whether or not this question set is for building a scenario
#' @return A shiny taglist object
questions_module_ui = function(id, question_data, default_response, is_policy = FALSE) {
  ns = shiny::NS(id)

  question_block = create_question_block(question_data, default_response, ns)
  # regularise the layout by wrapping each individual question UI element from the block
  questions_el = purrr::map(seq_along(question_block), function(i) {
   html_text = shiny::tags$div(
     shiny::tags$div(
       class = "question-definition",
       markdown::renderMarkdown(text = as.character(paste0("Definition: ",question_data[[i]]$definition))) %>%
         htmltools::HTML()
     ),
     shiny::tags$div(
       class = "question-explanation",
       markdown::renderMarkdown(text = as.character(question_data[[i]]$explanation)) %>%
         htmltools::HTML()
     ),
     shiny::tags$div(
       class = "question-text",
       markdown::renderMarkdown(text = as.character(
         paste0(
           ifelse(is.null(question_data[[i]]$part), "**1\\.** <br/>" ,paste0("**",question_data[[i]]$part,"\\.** <br/>")),
           question_data[[i]]$text
         )
       )) %>%
         htmltools::HTML()
     )
   )

   # return for mapping function
   return(
     div(
       tags$head(
         shiny::includeScript(
           system.file(
             "assets", "js", "shinyBS.js",
             package = "diagramNAT")
         )
       ),
       shinyjs::useShinyjs(),
       shinyjs::hidden(div(
         id = ns(paste0(question_block[[i]]$id, "-container")),
         style = "width: 100%",
         # title element
         shiny::div(
           class = "question-title",
           .node_map[question_data[[i]]$node]
         ),
         div(class = "question-content", html_text), #question_data[[i]]$text),
         question_block[[i]]$ui_el
       ))
     )
   )
  })

  # model initialisation
  launch_el = div(
    id= ns('question-launch-container'),
    class = "question-launch",
    shiny::actionButton(ns("start"), "Start")
  )
  # model naming starts hidden
  naming_el = shinyjs::hidden(div(
    id = ns('question-naming-container'),
    class = "question-name",
    shiny::textInput(ns("name"), label = "Give it a name", placeholder = if(is_policy) "Scenario" else "Baseline")
  ))

  # model finishing starts hidden
  finish_el = shinyjs::hidden(div(
    id = ns('question-finish-container'),
    class = "question-finish",
    shiny::actionButton(ns("finish"), "Finish")
  ))

  what_next_el = shinyjs::hidden(div(
    id = ns('question-what-next-container'),
    class = "question-what-next",
    shiny::div(
      shiny::column(
        width = 6, offset = 3,
        shiny::actionButton(ns("guide"), "What next?"),
        shiny::actionButton(ns("restart"), "Create Another"),
      )
    )
  ))

  # a header banner to follow across the top as you go through questions
  # starts hidden
  header_el = shinyjs::hidden(div(
    id = ns('question-header-container'),
    class = "question-header",
    div(
      class = "question-progress",
      shinyWidgets::progressBar(ns('progress'), 0, display_pct = TRUE)
    ),
    div(
      class = "question-header-name",
      uiOutput(ns("header_name"))
    ),
    div(
      class = "question-comments",
      shiny::textAreaInput(
        ns("comment"), label = "Comments",
        placeholder = "These comments will appear in the summary table and report.
        They are for you to use to make any notes for your reference as you answer the questions."
      )
    )
  ))

  # navigation buttons
  back_el = shinyjs::hidden(div(
    id = ns('question-back-container'),
    class = "question-back",
    shiny::actionButton(ns('back'), "Back", class = "btn-orange")
  ))

  forward_el = shinyjs::hidden(div(
    id = ns('question-next-container'),
    class = "question-next",
    shiny::actionButton(ns("go"), "Next", class = "btn-green")
  ))

  shiny::tagList(
    cicerone::use_cicerone(), # inject the JS for the intereactive guide into the UI
    div(
      class = "question-container",
      shinyjs::useShinyjs(),
      header_el,
      if(is_policy) NULL else launch_el,
      naming_el,
      questions_el,
      div(
        class = "question-button-row",
        back_el,
        forward_el,
        finish_el
      ),
      what_next_el
    )
  )
}

#' questions module server
#'
#' Manage the server side logic for the processing of questions
#'
#' @param input necessary input arg for shiny server function
#' @param output necessary output arg for shiny server function
#' @param session necessary session arg for shiny server function
#' @param question_data A named list of question data, the same as is used to build the UI elements
#' @param default_response A named list of default responses to the questions
#' @param is_policy logical, whether or not this module is being used for scenario creation
#' @return A named list of reactive objects to pass back to the parent, see details
#' @details
#' Returned list of reactive objects
#' list(state = return_val, name = reactive(input$name), comments = reactive(input$comment), finish = reactive(input$finish),
# scenario = reactive(input$policy), visualise = reactive(input$visualise),
# go = reactive(input$go), restart = reactive(input$restart))
#' \itemize{
#'   \item state - the current response state of the questions
#'   \item name - the name given to the model or scenario
#'   \item comments - the user input comments supplied alongside the responses
#'   \item finish - the click event for finishing the model building process
#'   \item go - the click event for pressing the next button
#' }
questions_module_server = function(input, output, session, question_data, default_response, is_policy = FALSE) {
  ## set up the question block ready to cycle through questions
  ns = session$ns
  question_block = create_question_block(question_data, default_response, ns)
  orig_state = purrr::map(question_block, ~.x$server_args$state) %>%
    setNames(purrr::map(question_data, ~paste(.x$node,.x$part,sep = "_")))
  orig_state_rv = do.call(reactiveValues, orig_state)

  question_block = purrr::map(question_block, function(x) {
    x[['server_args']][['state']] = reactive(orig_state_rv[[x$id]])
    x
  })

  next_steps_guide = if(!is_policy){
    cicerone::Cicerone$
      new(opacity = 0)$
      step(
        "li > a[data-value='visualise']",
        "View Results",
        "This will show you the probability (as a percentage) of having adequate intellectual control and the renderability of your digital records.",
        is_id = FALSE
      )$
      step(
        "li > a[data-value='scenario']",
        "Create a Scenario",
        "If you want to change your answers and see how it impacts your risk score you can create different scenarios.",
        is_id = FALSE
      )$
      step(
        ns("restart"),
        "Create another",
        "If you want to create another model this link will take you back to the questions assessing the risk of your archive."
      )
    # $step(
    #     "li > a[data-value='report']",
    #     "Download a report",
    #     "This tab is to create a downloadable report of your data in different formats.",
    #     is_id = FALSE
    #   )
  }else{
    cicerone::Cicerone$
      new(opacity = 0)$
      step(
        ns("restart"),
        "Create another",
        "Click here to build another scenario."
      )$
      step(
        "li > a[data-value='model']",
        "Create a Model",
        "Navigate here if you want to create a new model.",
        is_id = FALSE
      )$
      step(
        "li > a[data-value='visualise']",
        "View Results",
        "Come here if you want to see a graph of your models and scenarios.",
        is_id = FALSE
      )$
      step(
        "li > a[data-value='report']",
        "Download a report",
        "This tab is to create a downloadable report of your data in different formats.",
        is_id = FALSE
      )
  }

  observeEvent(input$guide, {
    next_steps_guide$init()$start()
  })

  state_ids = paste0(c(
    "question-launch", "question-naming",
    purrr::map_chr(question_block,'id'),
    "question-what-next"
  ), "-container")
  percentage_sequence = seq(0, 100, length.out = length(question_block) + 1)

  n_q = length(question_block)
  current_state = shiny::reactiveVal(if(is_policy) 2 else 1)
  # previous_state = shiny_reactiveVal(0)
  observeEvent({
    current_state()
    input$name

    }, {
    ix = current_state()
    # only show next when current state is bigger than 1
    shinyjs::toggleElement('question-next-container', condition = ix > 1  & ix < length(state_ids) -1 & input$name != '')
    shinyjs::toggleElement('question-back-container', condition = ix > 2 & ix < length(state_ids))
    shinyjs::toggleElement('question-header-container', condition = ix > 2 & ix < length(state_ids), anim = TRUE, animType = "fade")
    shinyjs::toggleElement('question-finish-container', condition = ix == (length(state_ids) - 1))
    shinyWidgets::updateProgressBar(session, "progress", value = percentage_sequence[ix-2])

    purrr::iwalk(state_ids, function(x, i) {
      shinyjs::toggleElement(id = x, condition = i == ix, anim = TRUE)
    })
  })

  observeEvent(input$finish, {
    current_state(current_state() + 1)
  })

  observeEvent(input$restart, {
    if(!is_policy) {
      updateTextInput(session, 'name', value = '')
      updateTextAreaInput(session, 'comment', value = '')
      for(nam in names(orig_state_rv)) {
        init = orig_state_rv[[nam]]
        repit = rep(NA, length(init))
        # forces a retrigger of downstream events
        # and ensures that questions are reset to their default values
        orig_state_rv[[nam]] = repit #orig_state_rv[[nam]] + 1
        orig_state_rv[[nam]] = init #orig_state_rv[[nam]] - 1
      }
      current_state(1)
    }

  }, ignoreInit = TRUE)

  output$header_name = renderUI({
    div(glue::glue("Currently defining: {input$name}"))
  })

  ## events to cycle through UI elements
  observeEvent(input$start, {
    # print("start")
    current_state(current_state() + 1)
  })

  observeEvent(input$go, {
    current_state(current_state() + 1)
  })

  observeEvent(input$back, {
    current_state(current_state() - 1)
  })


  ns = session$ns

  outputs = purrr::map(question_block, function(question) {
    module_args = c(list(module = question$server_func, id = question$id), question$server_args)
    do.call(callModule, module_args)
  }) %>% setNames(purrr::map(question_data, ~paste(.x$node,.x$part,sep = "_")))
  rv = reactiveValues()

  observe({
    for(nam in names(outputs)) {
      rv[[nam]] = outputs[[nam]]()
    }
  })

  return_val = reactive({
    orig_state = reactiveValuesToList(rv)
    req(length(orig_state) > 0)

    print("original state questions")
    print(orig_state)

    node = stringr::str_replace(names(orig_state), "_[0-9]$", "") %>% stringr::str_replace("_$","")
    res = list()
    # seen = c()
    for(name in unique(node)){
      print(name)
      if(sum(name == node) > 1) {
        print("multi")
        # appears as multipart
        temp = orig_state[name == node]
        res[[name]] = temp[sort(names(temp))] %>% setNames(1:sum(name == node))
      }else{
        print("single")
        res[[name]] = orig_state[[paste0(name, "_")]]
      }
    }
    # if(is_policy) browser()
    print("returned result")
    print(res)
    res
  })
  # observe({
  #   print(return_val())
  # })

  return(list(state = return_val, name = reactive(input$name), comments = reactive(input$comment), finish = reactive(input$finish),
              scenario = reactive(input$policy), visualise = reactive(input$visualise),
              go = reactive(input$go), restart = reactive(input$restart)))
}

#' model policy row
#'
#' build a single row of the overall table to ensure that all rows of the stored states are formatted consistently
#'
#' @param responses a set of responses to the questions
#' @param model_name the model name associated with the responses
#' @param policy_name the scenario name associated with the resoponses
#' @param notes the comments set by the user associated with these responses
#' @return a tibble with 1 row
model_policy_row = function(responses, model_name, policy_name = NA, notes = NA) {
  tibble::tibble(model = model_name, policy = policy_name, notes = notes ,response = list(responses))
}
