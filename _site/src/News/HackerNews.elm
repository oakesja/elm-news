module News.HackerNews exposing (fetch, tag)

-- https://hn.algolia.com/api

import Json.Decode exposing (..)
import Http
import News.Story exposing (Story)


tag : String
tag =
    "Hacker News"


fetch : Http.Request (List Story)
fetch =
    Http.get
        "https://hn.algolia.com/api/v1/search_by_date?query=%22elm%22&tags=(story,show,poll,pollopt,ask_hn)"
        decoder


type alias HackerNewsStory =
    { author : String
    , title : String
    , date : Float
    , url : Maybe String
    , tag : String
    }


decoder : Decoder (List Story)
decoder =
    map
        (\stories ->
            List.map storyToMessage stories
                |> List.filter (\s -> s.url /= "")
        )
        hackerNewsDecoder


hackerNewsDecoder : Decoder (List HackerNewsStory)
hackerNewsDecoder =
    at [ "hits" ] <|
        list <|
            map5 HackerNewsStory
                (field "author" string)
                (field "title" string)
                (field "created_at_i" timeDecoder)
                (maybe (field "url" string))
                (succeed tag)


timeDecoder : Decoder Float
timeDecoder =
    map (\time -> time * 1000) float


storyToMessage : HackerNewsStory -> Story
storyToMessage story =
    { author = story.author
    , title = story.title
    , date = story.date
    , url = Maybe.withDefault "" story.url
    , tag = tag
    }
