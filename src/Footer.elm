module Footer exposing (view)

import Html exposing (Html, div, footer, text)
import Html.Attributes exposing (class)
import GithubLink


view : Maybe Int -> Html msg
view currentYear =
    footer [ class "footer grey" ]
        [ GithubLink.view "footer__github"
        , div [ class "footer__description" ]
            [ div [] [ text "Code for this site is open source and written in Elm" ]
            , div [] [ text <| "© " ++ (copyrightYear currentYear) ++ " Jacob Oakes" ]
            ]
        ]


copyrightYear : Maybe Int -> String
copyrightYear currentYear =
    case currentYear of
        Just year ->
            if year > starYear then
                toString starYear ++ "-" ++ toString year
            else
                toString starYear

        Nothing ->
            toString starYear


starYear : Int
starYear =
    2016
