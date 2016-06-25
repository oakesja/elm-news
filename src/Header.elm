module Header exposing (view)

import Html exposing (Html, header, div, text)
import Html.Attributes exposing (class)
import Logo
import GithubLink
import Analytics


view : Html Analytics.Msg
view =
    header [ class "header" ]
        [ Logo.view
        , div [ class "header__description" ]
            [ text "All elm news in one place" ]
        , div [ class "header__right" ]
            [ GithubLink.view "header__github" ]
        ]
