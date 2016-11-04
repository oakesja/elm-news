module Page exposing (Page(..), parse)

import Navigation exposing (Location)
import UrlParser exposing (..)
import String


type Page
    = Home
    | Newsletters
    | Newsletter String
    | NotFound


parse : Navigation.Location -> Page
parse location =
    let
        path =
            location.pathname
                |> String.dropLeft 1
    in
        case UrlParser.parse identity pageParser path of
            Ok page ->
                page

            Err err ->
                let
                    _ =
                        Debug.log "404" err
                in
                    NotFound


pageParser : Parser (Page -> a) a
pageParser =
    oneOf
        [ format Newsletter (s "newsletters" </> string)
        , format Newsletters (s "newsletters")
        , format Home (s "")
        ]
