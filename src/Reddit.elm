module Reddit exposing (fetchCmd, tag)

import Json.Decode exposing (..)
import Task exposing (Task)
import Http
import Message exposing (..)


fetchCmd : (MessageResp -> msg) -> (MessageError -> msg) -> Cmd msg
fetchCmd successMsg failureMsg =
    Task.perform (\error -> failureMsg <| MessageError tag <| toString error)
        (\msgs -> successMsg <| MessageResp tag msgs)
        fetchTask


tag : String
tag =
    "reddit"


fetchTask : Task Http.Error (List Message)
fetchTask =
    Http.get decoder "https://www.reddit.com/r/elm/new/.json"


decoder : Decoder (List Message)
decoder =
    object6 Message
        ("author" := string)
        ("title" := string)
        ("created_utc" := timeDecoder)
        ("url" := string)
        (succeed tag)
        ("domain" := string)
        |> at [ "data" ]
        |> list
        |> at [ "data", "children" ]


timeDecoder : Decoder Float
timeDecoder =
    customDecoder float
        (\time -> Ok <| time * 1000)
