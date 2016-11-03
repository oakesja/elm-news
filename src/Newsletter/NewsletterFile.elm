module Newsletter.NewsletterFile exposing (NewsletterFile, fetch)

import Json.Decode exposing (..)
import Http
import Task exposing (Task)
import Date exposing (Date)
import String


type alias NewsletterFile =
    { date : Date
    , url : String
    , name : String
    }


fetch : Task Http.Error (List NewsletterFile)
fetch =
    Http.get (list decoder)
        "https://api.github.com/repos/oakesja/elm-news-newsletters/contents/newsletters"


decoder : Decoder NewsletterFile
decoder =
    object3 NewsletterFile
        dateDecoder
        ("download_url" := string)
        nameDecoder


dateDecoder : Decoder Date
dateDecoder =
    customDecoder nameDecoder <|
        \name ->
            name
                |> String.split "."
                |> List.head
                |> Maybe.withDefault ""
                |> Date.fromString


nameDecoder : Decoder String
nameDecoder =
    ("name" := string)
