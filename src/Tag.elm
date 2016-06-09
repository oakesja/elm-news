module Tag exposing (TagInfo, view)

import Html exposing (Html, div, a, text)
import Html.Attributes exposing (class, href)
import Dict


type alias TagInfo =
    { name : String
    , colorClass : String
    , link : String
    }


view : String -> Html msg
view name =
    let
        tag =
            lookupTagInfo name
    in
        div [ class <| "tag " ++ tag.colorClass ]
            [ a
                [ href tag.link
                , class "tag__link"
                ]
                [ text tag.name ]
            ]


lookupTagInfo : String -> TagInfo
lookupTagInfo name =
    let
        default =
            TagInfo "unknown" "grey" ""

        lookup =
            Dict.empty
                |> Dict.insert "elm-discuss" elmDiscussTag
                |> Dict.insert "elm-dev" elmDevTag
    in
        Maybe.withDefault default <| Dict.get name lookup


elmDiscussTag : TagInfo
elmDiscussTag =
    { name = "elm-discuss"
    , colorClass = "light_blue"
    , link = "https://groups.google.com/forum/#!forum/elm-discuss"
    }


elmDevTag : TagInfo
elmDevTag =
    { name = "elm-dev"
    , colorClass = "dark_blue"
    , link = "https://groups.google.com/forum/#!forum/elm-dev"
    }
