% Generated by roxygen2: do not edit by hand
% Please edit documentation in R/server.R
\name{app_server}
\alias{app_server}
\title{The application server-side}
\usage{
app_server(
  input,
  output,
  session,
  question_data,
  default_response,
  model,
  scoring_funcs
)
}
\arguments{
\item{input, output, session}{Internal parameters for {shiny}.
DO NOT REMOVE.}

\item{question_data}{The question data, named list, likely loaded from the YAML file internal to this package}

\item{default_response}{The default responses used to initialise the model}

\item{model}{The stored model, loaded from a .bif file}
}
\description{
This function largely calls the sub modules for the application and deals with the top level data manipulation.
}
