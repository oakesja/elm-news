module News.Tag exposing (TagInfo, view)

import Html exposing (Html, div, text, a)
import Html.Attributes exposing (class, href)
import Html.Events exposing (onClick)
import Dict
import News.Reddit as Reddit
import News.HackerNews as HackerNews
import Analytics exposing (Event)


type alias TagInfo =
    { tagColor : String
    , url : String
    }


view : String -> (Event -> msg) -> Html msg
view name onLinkClick =
    let
        tag =
            lookupTagInfo name
    in
        div
            [ class <| "tag " ++ tag.tagColor
            , Analytics.tagLink name tag.url
                |> onLinkClick
                |> onClick
            ]
            [ a
                [ class "tag__link"
                , href tag.url
                ]
                [ text name ]
            ]


lookupTagInfo : String -> TagInfo
lookupTagInfo name =
    let
        default =
            TagInfo "grey" ""

        lookup =
            Dict.empty
                |> Dict.insert "elm-discuss" elmDiscussTag
                |> Dict.insert "elm-dev" elmDevTag
                |> Dict.insert Reddit.tag redditTag
                |> Dict.insert HackerNews.tag hackerNewsTag
    in
        Maybe.withDefault default (Dict.get name lookup)


elmDiscussTag : TagInfo
elmDiscussTag =
    { tagColor = "elm_light_blue"
    , url = "https://groups.google.com/forum/#!forum/elm-discuss"
    }


elmDevTag : TagInfo
elmDevTag =
    { tagColor = "elm_dark_blue"
    , url = "https://groups.google.com/forum/#!forum/elm-dev"
    }


redditTag : TagInfo
redditTag =
    { tagColor = "elm_yellow"
    , url = "https://www.reddit.com/r/elm/new"
    }


hackerNewsTag : TagInfo
hackerNewsTag =
    { tagColor = "elm_green"
    , url = "https://hn.algolia.com/?query=elm&sort=byDate&prefix=false&page=0&dateRange=all&type=story"
    }
