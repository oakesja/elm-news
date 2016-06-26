module News.Story
    exposing
        ( Story
        , StoryError
        , StoryResp
        , StoryTask
        )

import Task exposing (Task)
import Http


type alias Story =
    { author : String
    , title : String
    , date : Float
    , url : String
    , tag : String
    , domain : String
    }


type alias StoryResp =
    { tag : String
    , stories : List Story
    }


type alias StoryError =
    { tag : String
    , error : String
    }


type alias StoryTask =
    Task Http.Error (List Story)
