module FetchData exposing (..)

import Http


type FetchData a
    = NotStarted
    | Fetching
    | Failed Http.Error
    | Fetched a


default : a -> FetchData a -> a
default defaultData data =
    case data of
        Fetched d ->
            d

        _ ->
            defaultData
