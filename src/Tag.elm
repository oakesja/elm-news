module Tag exposing (TagInfo, view)

import Html exposing (Html, div, a, text)
import Html.Attributes exposing (class, href)
import Dict
import Reddit


type alias TagInfo =
    { name : String
    , tagColor : String
    , textColor : String
    , link : String
    }


view : String -> Html msg
view name =
    let
        tag =
            lookupTagInfo name
    in
        div [ class <| "tag " ++ tag.tagColor ]
            [ a
                [ href tag.link
                , class <| "tag__link " ++ tag.textColor
                ]
                [ text tag.name ]
            ]


lookupTagInfo : String -> TagInfo
lookupTagInfo name =
    let
        default =
            TagInfo "unknown" "grey" "white_text" ""

        lookup =
            Dict.empty
                |> Dict.insert "elm-discuss" elmDiscussTag
                |> Dict.insert "elm-dev" elmDevTag
                |> Dict.insert Reddit.tag redditTag
    in
        Maybe.withDefault default (Dict.get name lookup)


elmDiscussTag : TagInfo
elmDiscussTag =
    { name = "elm-discuss"
    , tagColor = "elm_light_blue"
    , textColor = "white_text"
    , link = "https://groups.google.com/forum/#!forum/elm-discuss"
    }


elmDevTag : TagInfo
elmDevTag =
    { name = "elm-dev"
    , tagColor = "elm_dark_blue"
    , textColor = "white_text"
    , link = "https://groups.google.com/forum/#!forum/elm-dev"
    }


redditTag : TagInfo
redditTag =
    { name = Reddit.tag
    , tagColor = "reddit_blue"
    , textColor = "black_text"
    , link = "https://www.reddit.com/r/elm/new"
    }
