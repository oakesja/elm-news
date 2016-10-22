module Components.GithubLink exposing (view)

import Html exposing (Html, img, a)
import Html.Attributes exposing (class, src, alt, title, href)
import Html.Events exposing (onClick)
import Analytics exposing (Event)


view : String -> (Event -> msg) -> Html msg
view imgClasses onLinkClick =
    a
        [ href "https://github.com/oakesja/elm-news" ]
        [ img
            [ class <| "github " ++ imgClasses
            , src "assets/images/GitHub-Mark-Light-64px.png"
            , alt "elm-news on github"
            , title "elm-news on github"
            , Analytics.githubRepo "https://github.com/oakesja/elm-news"
                |> onLinkClick
                |> onClick
            ]
            []
        ]
