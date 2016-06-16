module HackerNews exposing (fetch, tag)

-- https://hn.algolia.com/api

import Json.Decode exposing (..)
import Task exposing (Task)
import Http
import Message exposing (..)
import Erl
import String


type alias HackerNewsStory =
    { author : String
    , title : String
    , date : Float
    , link : Maybe String
    }


tag : String
tag =
    "Hacker News"


fetch : Task Http.Error (List Message)
fetch =
    Http.get decoder "http://hn.algolia.com/api/v1/search_by_date?query=%22elm%22&tags=(story,show,poll,pollopt,ask_hn)"


decoder : Decoder (List Message)
decoder =
    customDecoder hackerNewsDecoder
        <| \stories ->
            List.map storyToMessage stories
                |> List.filter (\s -> s.link /= "")
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


storyToMessage : HackerNewsStory -> Message
storyToMessage story =
    let
        link =
            Maybe.withDefault "" story.link
    in
        { author = story.author
        , title = story.title
        , date = story.date
        , link = link
        , tag = tag
        , domain = parseDomain link
        }


parseDomain : String -> String
parseDomain link =
    Erl.parse link
        |> .host
        |> String.join "."
