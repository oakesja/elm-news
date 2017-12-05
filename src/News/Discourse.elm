module News.Discourse exposing (fetch, tag)

import Date
import Json.Decode exposing (..)
import Http
import News.Story exposing (Story)


tag : String
tag =
    "Discourse"


fetch : Http.Request (List Story)
fetch =
    Http.get "https://discourse.elm-lang.org/latest.json" decoder


decoder : Decoder (List Story)
decoder =
    at [ "topic_list", "topics" ] <|
        list <|
            map5 Story
                (field "last_poster_username" string)
                (field "fancy_title" string)
                (field "last_posted_at" string |> andThen timeDecoder)
                (map2 urlDecoder (field "id" int) (field "slug" string))
                (succeed tag)


timeDecoder : String -> Decoder Float
timeDecoder string =
    case Date.fromString string of
        Ok time ->
            succeed <| Date.toTime time

        Err err ->
            fail err


urlDecoder : Int -> String -> String
urlDecoder topicId slug =
    String.join "/"
        [ "https://discourse.elm-lang.org"
        , "t"
        , slug
        , toString topicId
        ]
