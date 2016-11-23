module Page exposing (Page(..), parse)

import Navigation exposing (Location)
import UrlParser exposing (..)


type Page
    = Home (Maybe String)
    | Newsletters
    | Newsletter String
    | NotFound


parse : Navigation.Location -> Page
parse location =
    parsePath pageParser location
        |> Maybe.withDefault NotFound


pageParser : Parser (Page -> a) a
pageParser =
    oneOf
        [ map Newsletter (s "newsletters" </> string)
        , map Newsletters (s "newsletters")
        , map Home (s "" <?> stringParam "storyId")
        ]
