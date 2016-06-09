module DateFormatter exposing (format)

import Date exposing (Date)
import Date.Format


format : Maybe Date -> Date -> String
format maybeNow date =
    case maybeNow of
        Just now ->
            if Date.day now == Date.day date && Date.month now == Date.month date && Date.year now == Date.year date then
                Date.Format.format "%l:%M %p" date
            else
                Date.Format.format "%b %d" date

        Nothing ->
            Date.Format.format "%b %d" date
