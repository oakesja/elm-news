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
    | NewsLink String String String
    | TagLink String String


type alias LinkEvent =
    { category : String
    , action : String
    , url : String
    , title : Maybe String
    , tag : Maybe String
    }


msgToCmd : Msg -> Cmd msg
msgToCmd msg =
    case msg of
        GithubLink url ->
            githubRepo url

        NewsLink tag url title ->
            newsLink tag url title

        TagLink tag url ->
            tagLink tag url


githubRepo : String -> Cmd msg
githubRepo url =
    registerLinkClick
        { category = "Github Link"
        , action = "click"
        , url = url
        , title = Nothing
        , tag = Nothing
        }


newsLink : String -> String -> String -> Cmd msg
newsLink tag url title =
    registerLinkClick
        { category = "News"
        , action = "click"
        , url = url
        , title = Just title
        , tag = Just tag
        }


tagLink : String -> String -> Cmd msg
tagLink tag url =
    registerLinkClick
        { category = "Tag"
        , action = "click"
        , url = url
        , title = Nothing
        , tag = Just tag
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
