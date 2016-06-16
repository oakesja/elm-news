module GithubLink exposing (view)

import Html exposing (Html, a, img)
import Html.Attributes exposing (class, href, src)


view : String -> Html msg
view imgClasses =
    a [ href "https://github.com/oakesja/elm-news" ]
        [ img
            [ class imgClasses
            , src "assets/images/GitHub-Mark-Light-64px.png"
            ]
            []
        ]
