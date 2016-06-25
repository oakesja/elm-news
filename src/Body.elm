module Body exposing (view)

import Date exposing (Date)
import Html exposing (Html, div)
import Html.Attributes exposing (class)
import NewsLink exposing (NewsLink)
import Card
import Spinner
import Analytics


view : Maybe Date -> Int -> Bool -> List NewsLink -> Html Analytics.Msg
view now width showSpinner newsLinks =
    let
        cards =
            if showSpinner then
                Spinner.view
            else
                div [ class "cards" ]
                    <| List.map (Card.view now width)
                    <| List.reverse
                    <| List.sortBy .date newsLinks
    in
        div [ class "body" ]
            [ cards ]
