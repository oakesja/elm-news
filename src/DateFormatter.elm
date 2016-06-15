module DateFormatter exposing (format)

import Date exposing (Date)
import Date.Format


format : Maybe Date -> Date -> String
format maybeNow date =
    case maybeNow of
        Just now ->
            let
                nowTime =
                    Date.toTime now

                dateTime =
                    Date.toTime date

                diff =
                    (nowTime - dateTime) / 1000
            in
                if diff <= 0 then
                    Date.Format.format "%b %d" date
                else if diff > 0 && diff <= 1 then
                    "1 second ago"
                else if diff > 1 && diff < 60 then
                    toString diff ++ " seconds ago"
                else if diff >= 60 && diff < 120 then
                    "1 minute ago"
                else if diff >= 120 && diff < 3600 then
                    toString (round <| diff / 60) ++ " minutes ago"
                else if diff >= 3600 && diff < 7200 then
                    "1 hour ago"
                else if diff >= 7200 && diff < 86400 then
                    toString (round <| diff / 3600) ++ " hours ago"
                else if diff >= 86400 && diff < 172800 then
                    "1 day ago"
                else if diff >= 172800 && diff < 2592000 then
                    toString (round <| diff / 86400) ++ " days ago"
                else if diff >= 2629800 && diff < 5259600 then
                    "1 month ago"
                else if diff >= 5259600 && diff < 31557600 then
                    toString (round <| diff / 2629800) ++ " months ago"
                else if diff >= 31557600 && diff < 63115200 then
                    "1 year ago"
                else
                    toString (diff / 31557600) ++ " years ago"

        Nothing ->
            Date.Format.format "%b %d" date
