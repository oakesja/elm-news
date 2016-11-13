module FetchData exposing (..)

import Http
import Html exposing (Html, div, text)
import Html.Attributes exposing (class)
import Components.Spinner


type FetchData a
    = NotStarted
    | Fetching
    | Failed Http.Error
    | Fetched a


default : a -> FetchData a -> a
default defaultData data =
    case data of
        Fetched d ->
            d

        _ ->
            defaultData


view : (a -> Html msg) -> FetchData a -> Html msg
view fetchedView data =
    case data of
        Fetched d ->
            fetchedView d

        Failed error ->
            div [ class "center__error" ]
                [ text "Failed to load" ]

        _ ->
            div [ class "center__spinner" ]
                [ Components.Spinner.view ]
