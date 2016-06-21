module Body exposing (view)

import Date exposing (Date)
import Html exposing (Html, div)
import Html.Attributes exposing (class)
import ContentLink exposing (ContentLink)
import Card
import Spinner


view : Maybe Date -> Int -> Bool -> List ContentLink -> Html msg
view now width showSpinner contentLinks =
    let
        cards =
            if showSpinner then
                Spinner.view
            else
                div [ class "cards" ]
                    <| List.map (Card.view now width)
                    <| List.reverse
                    <| List.sortBy .date contentLinks
    in
        div [ class "body" ]
            [ cards ]
