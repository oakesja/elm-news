module Components.Header exposing (Config, view)

import Html exposing (Html, header, div, text, a, img, h1)
import Html.Attributes exposing (class, classList, title, href, attribute, alt, src, tabindex, id)
import Html.Events exposing (onClick)
import HtmlEvents exposing (onEnter)
import Components.Logo as Logo
import Components.GithubLink as GithubLink
import Analytics exposing (Event)
import Links


type alias Config msg =
    { onLinkClick : Event -> msg
    , onIconClick : msg
    , onNewsletterClick : msg
    , screenWidth : Int
    }


view : Config msg -> Html msg
view config =
    let
        minimized =
            config.screenWidth < 1000
    in
        header
            [ class "header" ]
            [ div
                [ classList
                    [ ( "header__logo", True )
                    , ( "header__logo_min", minimized )
                    ]
                ]
                [ div
                    [ attribute "role" "button"
                    , tabindex 0
                    , onEnter config.onIconClick
                    , id "logo"
                    ]
                    [ Logo.view config.onIconClick ]
                , div [] []
                ]
            , h1
                [ classList
                    [ ( "header__title", True )
                    , ( "header__title_hidden", minimized )
                    ]
                ]
                [ text "All elm news in one place" ]
            , div
                [ classList
                    [ ( "header__controls", True )
                    , ( "header__controls_min", minimized )
                    ]
                ]
                [ GithubLink.view "header__icon header__control" config.onLinkClick
                ]
            ]
