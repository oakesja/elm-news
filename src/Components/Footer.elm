module Components.Footer exposing (view, css)

import Html exposing (Html, div, footer, text)
import Components.GithubLink as GithubLink
import Analytics exposing (Event)
import Css exposing (..)
import Css.Namespace exposing (namespace)
import Html.CssHelpers exposing (withNamespace)
import Css.Mixins exposing (..)
import Css.Colors as Colors


{ class, name } =
    withNamespace "footer"


type Classes
    = Layout
    | Description


view : Maybe Int -> (Event -> msg) -> Html msg
view currentYear onLinkClick =
    footer [ class [ Layout ] ]
        [ GithubLink.view "footer__github" onLinkClick
        , div [ class [ Description ] ]
            [ div [] [ Html.text "Code for this site is open source and written in Elm" ]
            , div [] [ Html.text <| "© " ++ (copyrightYear currentYear) ++ " Jacob Oakes" ]
            ]
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


css : Css.Stylesheet
css =
    (stylesheet << namespace name)
        [ (.) Layout
            [ flexRow
            , justifyCenter
            , minHeight (px 50)
            , textAlign center
            , boxShadow4 (px 0) (px -4) (px 4) Colors.shadow
            , backgroundColor Colors.darkBlue
            , padding (px 10)
            ]
        , (.) Description
            [ marginLeft (px 10)
            , flexColumn
            , justifyCenter
            , color Colors.white
            ]
        ]
