module News.HackerNews exposing (fetch, tag)

-- https://hn.algolia.com/api

import Json.Decode exposing (..)
import Http
import News.Story exposing (Story)
import Task exposing (Task)
import Url


tag : String
tag =
    "Hacker News"


fetch : Task Http.Error (List Story)
fetch =
    Http.get decoder "https://hn.algolia.com/api/v1/search_by_date?query=%22elm%22&tags=(story,show,poll,pollopt,ask_hn)"


decoder : Decoder (List Story)
decoder =
    object6 Story
        ("author" := string)
        ("title" := string)
        ("created_at_i" := timeDecoder)
        urlDecoder
        (succeed tag)
        domainDecoder
        |> list
        |> at [ "hits" ]


urlDecoder : Decoder String
urlDecoder =
    customDecoder ("url" := maybe string)
        (Ok << Maybe.withDefault "")


timeDecoder : Decoder Float
timeDecoder =
    customDecoder float
        (\time -> Ok <| time * 1000)


domainDecoder : Decoder String
domainDecoder =
    customDecoder urlDecoder (Ok << Url.parseDomain)
