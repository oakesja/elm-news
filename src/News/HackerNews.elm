module News.HackerNews exposing (fetch, tag)

-- https://hn.algolia.com/api

import Json.Decode exposing (..)
import Http
import News.Story exposing (Story, StoryTask)
import Erl
import String


type alias HackerNewsStory =
    { author : String
    , title : String
    , date : Float
    , url : Maybe String
    }


tag : String
tag =
    "Hacker News"


fetch : StoryTask
fetch =
    Http.get decoder "https://hn.algolia.com/api/v1/search_by_date?query=%22elm%22&tags=(story,show,poll,pollopt,ask_hn)"


decoder : Decoder (List Story)
decoder =
    customDecoder hackerNewsDecoder <|
        \stories ->
            List.map storyToMessage stories
                |> List.filter (\s -> s.url /= "")
                |> Ok


hackerNewsDecoder : Decoder (List HackerNewsStory)
hackerNewsDecoder =
    object4 HackerNewsStory
        ("author" := string)
        ("title" := string)
        ("created_at_i" := timeDecoder)
        ("url" := maybe string)
        |> list
        |> at [ "hits" ]


timeDecoder : Decoder Float
timeDecoder =
    customDecoder float
        (\time -> Ok <| time * 1000)


storyToMessage : HackerNewsStory -> Story
storyToMessage story =
    let
        url =
            Maybe.withDefault "" story.url
    in
        { author = story.author
        , title = story.title
        , date = story.date
        , url = url
        , tag = tag
        , domain = parseDomain url
        }


parseDomain : String -> String
parseDomain url =
    Erl.parse url
        |> .host
        |> String.join "."
