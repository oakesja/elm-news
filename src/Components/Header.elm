module Components.Header exposing (view)

import Html exposing (Html, header, div, text, a, img, h1)
import Html.Attributes exposing (class, title, href, attribute, alt, src)
import Html.Events exposing (onClick)
import Components.Logo as Logo
import Components.GithubLink as GithubLink
import Analytics exposing (Event)
import Links


view : (Event -> msg) -> Html msg
view onLinkClick =
    header [ class "header" ]
        [ Logo.view
        , h1 [ class "header__description" ]
            [ text "All elm news in one place" ]
        , div [ class "header__right" ]
            [ topNewsLink onLinkClick
            , twitterLink onLinkClick
            , GithubLink.view "header__github" onLinkClick
            ]
        ]


twitterLink : (Event -> msg) -> Html msg
twitterLink onLinkClick =
    a
        [ href Links.twitter ]
        [ img
            [ class "header__twitter"
            , src Links.twitterIcon
            , alt "Follow @elmlangnews"
            , title "Follow @elmlangnews on Twitter"
            , Analytics.twitterLink Links.twitter
                |> onLinkClick
                |> onClick
            ]
            []
        ]


topNewsLink : (Event -> msg) -> Html msg
topNewsLink onLinkClick =
    a
        [ class "header__top-news"
        , title "Sign up for the weekly top news"
        , href Links.newsletterSignup
        , onClick (onLinkClick Analytics.newsletter)
        ]
        [ div [] [ text "Top" ]
        , div [] [ text "Newsletter" ]
        ]
