# Internal use, quickly generate random set of responses to 9 questions
generate_example_reponse = function() {
  min_max = function(x){
    100*x/sum(x)
  }
  example_responses = list(
    rpois(1,25), rpois(1,40), min_max(c(rpois(3,33))),
    rpois(1,50), min_max(rpois(3,c(10,20,70))), min_max(rpois(3,c(20,50,30))),
    rpois(1,10), rpois(1,10), rpois(1,3)
  )
  example_responses %>% setNames(.user_nodes)
}

#' Format responses
#'
#' Take list of question responses and restructure to nice tibble
#' @param values named list of question responses
#' @return a tibble(node, response)
format_responses = function(values) {
  tibble::tibble(node = names(values), response = values)
}

#' @return a tibble(Name, Intellectual_Control, Renderability)
format_score = function( scores, name = "model"){
  dplyr::bind_cols(Name = name, tibble::as_tibble(scores))
}

#' @importFrom jsonlite write_json
save_responses = function(responses, path) {
  jsonlite::write_json(responses, path)
}

#' @importFrom jsonlite read_json
#' @importFrom purrr map
load_responses = function(path) {
  res = jsonlite::read_json(path)
  purrr::map(res, unlist)
}