module FetchData exposing (..)

import Http


type FetchData a
    = NotStarted
    | Fetching
    | Failed Http.Error
    | Fetched a
