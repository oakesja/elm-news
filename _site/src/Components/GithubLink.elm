module Components.GithubLink exposing (view)

import Html exposing (Html, img, a)
import Html.Attributes exposing (class, src, alt, title, href)
import Html.Events exposing (onClick)
import Analytics exposing (Event)
import Links


view : String -> (Event -> msg) -> Html msg
view imgClasses onLinkClick =
    a
        [ href Links.github ]
        [ img
            [ class ("github " ++ imgClasses)
            , src Links.githubIcon
            , alt "elm-news on github"
            , title "elm-news on github"
            , Analytics.githubRepo
                |> onLinkClick
                |> onClick
            ]
            []
        ]
