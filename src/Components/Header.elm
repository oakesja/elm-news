module Components.Header exposing (view)

import Html exposing (Html, header, div, text, a, img)
import Html.Attributes exposing (class, title, href, attribute, alt, src)
import Html.Events exposing (onClick)
import Components.Logo as Logo
import Components.GithubLink as GithubLink
import Analytics exposing (Event)


view : (Event -> msg) -> Html msg
view onLinkClick =
    header [ class "header" ]
        [ Logo.view
        , div [ class "header__description" ]
            [ text "All elm news in one place" ]
        , div [ class "header__right" ]
            [ topNewsLink onLinkClick
            , twitterLink onLinkClick
            , GithubLink.view "header__github" onLinkClick
            ]
        ]


twitterLink : (Event -> msg) -> Html msg
twitterLink onLinkClick =
    let
        url =
            "https://twitter.com/elmlangnews"
    in
        a
            [ href url ]
            [ img
                [ class "header__twitter"
                , src "assets/images/twitter.png"
                , alt "Follow @elmlangnews"
                , title "Follow @elmlangnews on Twitter"
                , Analytics.twitterLink url
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
        , href "https://docs.google.com/forms/d/1jZmbctSv_HnPlrcVN_fvtemTaWz7MAq8019gJsnSPOE/viewform"
        , onClick (onLinkClick Analytics.newsletter)
        ]
        [ div [] [ text "Top" ]
        , div [] [ text "Newsletter" ]
        ]
