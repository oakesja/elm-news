module Components.Footer exposing (view)

import Html exposing (Html, div, footer, text)
import Html.Attributes exposing (class)
import Components.GithubLink as GithubLink
import Analytics exposing (Event)


view : Maybe Int -> (Event -> msg) -> Html msg
view currentYear onLinkClick =
    footer [ class "footer grey" ]
        [ div [ class "footer__description" ]
            [ div [] [ text "Code for this site is open source and written in Elm" ]
            , div [] [ text <| "© " ++ (copyrightYear currentYear) ++ " Jacob Oakes" ]
            ]
        , GithubLink.view "footer__github" onLinkClick
        ]


copyrightYear : Maybe Int -> String
copyrightYear currentYear =
    let
        startYear =
            2016
    in
        case currentYear of
            Just year ->
                if year > startYear then
                    toString startYear ++ "-" ++ toString year
                else
                    toString startYear

            Nothing ->
                toString startYear
