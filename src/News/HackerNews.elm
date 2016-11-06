module News.HackerNews exposing (fetch, tag)

-- https://hn.algolia.com/api

import Json.Decode exposing (..)
import Http
import News.Story exposing (Story)
import Task exposing (Task)


tag : String
tag =
    "Hacker News"


fetch : Task Http.Error (List Story)
fetch =
    Http.get decoder "https://hn.algolia.com/api/v1/search_by_date?query=%22elm%22&tags=(story,show,poll,pollopt,ask_hn)"


type alias HackerNewsStory =
    { author : String
    , title : String
    , date : Float
    , url : Maybe String
    , tag : String
    }


decoder : Decoder (List Story)
decoder =
    customDecoder hackerNewsDecoder <|
        \stories ->
            List.map storyToMessage stories
                |> List.filter (\s -> s.url /= "")
                |> Ok


hackerNewsDecoder : Decoder (List HackerNewsStory)
hackerNewsDecoder =
    at [ "hits" ] <|
        list <|
            object5 HackerNewsStory
                ("author" := string)
                ("title" := string)
                ("created_at_i" := timeDecoder)
                ("url" := maybe string)
                (succeed tag)


timeDecoder : Decoder Float
timeDecoder =
    customDecoder float
        (\time -> Ok <| time * 1000)


storyToMessage : HackerNewsStory -> Story
storyToMessage story =
    { author = story.author
    , title = story.title
    , date = story.date
    , url = Maybe.withDefault "" story.url
    , tag = tag
    }
