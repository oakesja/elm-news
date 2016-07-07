module Components.Header exposing (view)

import Html exposing (Html, header, div, text, a)
import Html.Attributes exposing (class, title, href)
import Html.Events exposing (onClick)
import Components.Logo as Logo
import Components.GithubLink as GithubLink
import Analytics


view : Html Analytics.Msg
view =
    header [ class "header" ]
        [ Logo.view
        , div [ class "header__description" ]
            [ text "All elm news in one place" ]
        , div [ class "header__right" ]
            [ topNewsLink
            , GithubLink.view "header__github"
            ]
        ]


topNewsLink : Html Analytics.Msg
topNewsLink =
    a
        [ class "header__top-news"
        , title "Sign up for the weekly top news"
        , href "https://docs.google.com/forms/d/1jZmbctSv_HnPlrcVN_fvtemTaWz7MAq8019gJsnSPOE/viewform"
        , onClick Analytics.Newsletter
        ]
        [ div [] [ text "Top" ]
        , div [] [ text "Newsletter" ]
        ]
