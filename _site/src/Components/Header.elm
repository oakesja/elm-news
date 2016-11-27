module Components.Header exposing (Config, view)

import Html exposing (Html, header, div, text, a, img, h1)
import Html.Attributes exposing (class, classList, title, href, attribute, alt, src)
import Html.Events exposing (onClick)
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
                [ Logo.view config.onIconClick ]
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
                [ newsletters config.onNewsletterClick
                , twitterLink config.onLinkClick
                , GithubLink.view "header__icon header__control" config.onLinkClick
                ]
            ]


twitterLink : (Event -> msg) -> Html msg
twitterLink onLinkClick =
    a
        [ href Links.twitter ]
        [ img
            [ class "header__icon header__control"
            , src Links.twitterIcon
            , alt "Follow @elmlangnews"
            , title "Follow @elmlangnews on Twitter"
            , Analytics.twitterLink
                |> onLinkClick
                |> onClick
            ]
            []
        ]


newsletters : msg -> Html msg
newsletters msg =
    div
        [ class "header__newsletters header__control"
        , title "An archive of previous weekly newsletters"
        , onClick msg
        ]
        [ div [] [ text "Newsletters" ]
        ]
