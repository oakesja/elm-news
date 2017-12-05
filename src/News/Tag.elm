module News.Tag exposing (TagInfo, view)

import Html exposing (Html, div, text, a)
import Html.Attributes exposing (class, href)
import Html.Events exposing (onClick)
import Dict
import News.Reddit as Reddit
import News.HackerNews as HackerNews
import News.Discourse as Discourse
import Analytics exposing (Event)
import String


type alias TagInfo =
    { tagColor : String
    , url : Maybe String
    , displayName : String
    }


view : String -> (Event -> msg) -> Html msg
view name onLinkClick =
    let
        tag =
            lookupTagInfo (String.toLower name)
    in
        div
            [ class <| "tag " ++ tag.tagColor ]
            [ a
                (linkAttrs name tag onLinkClick)
                [ text tag.displayName ]
            ]


linkAttrs : String -> TagInfo -> (Event -> msg) -> List (Html.Attribute msg)
linkAttrs name tag onLinkClick =
    case tag.url of
        Just u ->
            [ class "tag__link"
            , href u
            , Analytics.tagLink name u
                |> onLinkClick
                |> onClick
            ]

        Nothing ->
            [ class "tag__link tag_disabled" ]


lookupTagInfo : String -> TagInfo
lookupTagInfo name =
    let
        default =
            TagInfo "elm_grey" Nothing name

        lookup =
            Dict.empty
                |> Dict.insert "elm-discuss" elmDiscussTag
                |> Dict.insert "elm-dev" elmDevTag
                |> Dict.insert (String.toLower Reddit.tag) redditTag
                |> Dict.insert (String.toLower HackerNews.tag) hackerNewsTag
                |> Dict.insert (String.toLower Discourse.tag) discourseTag
    in
        Maybe.withDefault default (Dict.get name lookup)


elmDiscussTag : TagInfo
elmDiscussTag =
    { tagColor = "elm_light_blue"
    , url = Just "https://groups.google.com/forum/#!forum/elm-discuss"
    , displayName = "elm-discuss"
    }


elmDevTag : TagInfo
elmDevTag =
    { tagColor = "elm_dark_blue"
    , url = Just "https://groups.google.com/forum/#!forum/elm-dev"
    , displayName = "elm-dev"
    }


redditTag : TagInfo
redditTag =
    { tagColor = "elm_yellow"
    , url = Just "https://www.reddit.com/r/elm/new"
    , displayName = Reddit.tag
    }


hackerNewsTag : TagInfo
hackerNewsTag =
    { tagColor = "elm_green"
    , url = Just "https://hn.algolia.com/?query=elm&sort=byDate&prefix=false&page=0&dateRange=all&type=story"
    , displayName = HackerNews.tag
    }


discourseTag : TagInfo
discourseTag =
    { tagColor = "elm_dark_teal"
    , url = Just "https://discourse.elm-lang.org"
    , displayName = Discourse.tag
    }
