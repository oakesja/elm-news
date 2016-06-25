port module Analytics
    exposing
        ( Msg(..)
        , msgToCmd
        , onLinkClick
        )

import Html
import Html.Events exposing (Options, onWithOptions)
import Json.Decode as Json


type Msg
    = GithubLink String
    | NewsLink String String
    | TagLink String String


type alias LinkEvent =
    { category : String
    , action : String
    , url : String
    }


msgToCmd : Msg -> Cmd msg
msgToCmd msg =
    case msg of
        GithubLink url ->
            githubRepo url

        NewsLink tag url ->
            newsLink tag url

        TagLink tag url ->
            tagLink tag url


githubRepo : String -> Cmd msg
githubRepo url =
    registerLinkClick
        { category = "Github Link"
        , action = "click"
        , url = url
        }


newsLink : String -> String -> Cmd msg
newsLink tag url =
    registerLinkClick
        { category = "News"
        , action = tag
        , url = url
        }


tagLink : String -> String -> Cmd msg
tagLink tag url =
    registerLinkClick
        { category = "Tag"
        , action = tag
        , url = url
        }


onLinkClick : Msg -> Html.Attribute Msg
onLinkClick msg =
    onWithOptions "click" clickOptions
        <| Json.succeed
        <| msg


clickOptions : Options
clickOptions =
    { stopPropagation = False
    , preventDefault = True
    }


port registerLinkClick : LinkEvent -> Cmd msg
