port module News.Fetcher exposing (cmd, subscriptions)

import Task exposing (Task)
import News.Story exposing (..)
import Reddit
import HackerNews


cmd : (StoryResp -> msg) -> (StoryError -> msg) -> Cmd msg
cmd successMsg errorMsg =
    Cmd.batch
        [ fetchGoogleGroupMsgs "elm-dev"
        , fetchGoogleGroupMsgs "elm-discuss"
        , fetch successMsg errorMsg Reddit.tag Reddit.fetch
        , fetch successMsg errorMsg HackerNews.tag HackerNews.fetch
        ]


subscriptions : (StoryResp -> msg) -> (StoryError -> msg) -> Sub msg
subscriptions successMsg errorMsg =
    Sub.batch
        [ fetchedGoogleGroupMsgs successMsg
        , errorGoogleGroupMsgs errorMsg
        ]


fetch : (StoryResp -> msg) -> (StoryError -> msg) -> String -> StoryTask -> Cmd msg
fetch successMsg errorMsg tag task =
    Task.perform (\error -> errorMsg <| StoryError tag <| toString error)
        (\links -> successMsg <| StoryResp tag links)
        task


port fetchGoogleGroupMsgs : String -> Cmd msg


port fetchedGoogleGroupMsgs : (StoryResp -> msg) -> Sub msg


port errorGoogleGroupMsgs : (StoryError -> msg) -> Sub msg
