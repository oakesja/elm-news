module Components.GithubLink exposing (view)

import Html exposing (Html, img)
import Html.Attributes exposing (class, src, alt)
import Analytics


view : String -> Html Analytics.Msg
view imgClasses =
    img
        [ class <| "github " ++ imgClasses
        , src "assets/images/GitHub-Mark-Light-64px.png"
        , alt "elm-news on github"
        , Analytics.onLinkClick
            <| Analytics.GithubLink "https://github.com/oakesja/elm-news"
        ]
        []
