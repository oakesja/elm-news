port module Main exposing (..)

import Html exposing (Html, a, text, div)
import Html.Attributes exposing (style, href)
import Html.App
import Date exposing (Date)
import Task
import Date.Format
import Basics.Extra exposing (never)


type alias Model =
    { messages : List GoogleGroupMsg
    , errors : List ( String, String )
    , now : Maybe Date
    }


type alias GoogleGroupMsg =
    { author : String
    , title : String
    , date : Float
    , description : String
    , link : String
    , group : String
    }


init : ( Model, Cmd Msg )
init =
    let
        model =
            { messages = []
            , errors = []
            , now = Nothing
            }

        fx =
            Cmd.batch
                [ fetchGoogleGroupMsgs "elm-dev"
                , fetchGoogleGroupMsgs "elm-discuss"
                , Task.perform never CurrentDate Date.now
                ]
    in
        ( model
        , fx
        )


type Msg
    = FetchGoogleGroupSuccess GoogleGroupResp
    | FetchGoogleGroupError GoogleGroupError
    | CurrentDate Date


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        FetchGoogleGroupSuccess resp ->
            let
                updatedModel =
                    { model | messages = model.messages ++ resp.messages }
            in
                ( updatedModel
                , Cmd.none
                )

        FetchGoogleGroupError error ->
            let
                updatedModel =
                    { model | errors = ( error.group, error.message ) :: model.errors }
            in
                ( updatedModel
                , Cmd.none
                )

        CurrentDate date ->
            ( { model | now = Just date }
            , Cmd.none
            )


view : Model -> Html Msg
view model =
    div []
        <| List.map (newsView model.now)
        <| List.reverse
        <| List.sortBy .date model.messages


newsView : Maybe Date -> GoogleGroupMsg -> Html Msg
newsView now msg =
    div
        [ style
            [ ( "display", "flex" )
            , ( "flex-direction", "row" )
            , ( "border-top", "1px solid lightgrey" )
            ]
        ]
        [ tag msg.group
        , div
            [ style
                [ ( "display", "flex" )
                , ( "flex-direction", "column" )
                , ( "justify-content", "space-around" )
                ]
            ]
            [ div
                [ style
                    [ ( "font-weight", "bold" )
                    ]
                ]
                [ a [ href msg.link ]
                    [ text msg.title ]
                ]
            , div []
                [ text <| "By " ++ msg.author ]
            ]
        , div
            [ style
                [ ( "align-self", "center" )
                , ( "flex-grow", "1" )
                , ( "text-align", "right" )
                ]
            ]
            [ text <| formatDate now <| Date.fromTime msg.date ]
        ]


formatDate : Maybe Date -> Date -> String
formatDate maybeNow date =
    case maybeNow of
        Just now ->
            if Date.day now == Date.day date && Date.month now == Date.month date && Date.year now == Date.year date then
                Date.Format.format "%l:%M %p" date
            else
                Date.Format.format "%b %d" date

        Nothing ->
            Date.Format.format "%b %d" date


tag : String -> Html Msg
tag name =
    let
        color =
            case name of
                "elm-dev" ->
                    elmDarkBlue

                "elm-discuss" ->
                    elmLightBlue

                _ ->
                    "#d9d9d9"
    in
        div
            [ style
                [ ( "background-color", color )
                , ( "padding", "5px" )
                , ( "display", "inline-block" )
                , ( "width", "80px" )
                , ( "text-align", "center" )
                , ( "margin", "10px" )
                ]
            ]
            [ text name ]


elmDarkBlue : String
elmDarkBlue =
    "#5A6378"


elmLightBlue : String
elmLightBlue =
    "#60B5CC"


elmYellow : String
elmYellow =
    "#F0AD00"


elmGreen : String
elmGreen =
    "#7FD13B"


type alias GoogleGroupResp =
    { group : String
    , messages : List GoogleGroupMsg
    }


type alias GoogleGroupError =
    { group : String
    , message : String
    }


port fetchGoogleGroupMsgs : String -> Cmd msg


port fetchedGoogleGroupMsgs : (GoogleGroupResp -> msg) -> Sub msg


port errorGoogleGroupMsgs : (GoogleGroupError -> msg) -> Sub msg


subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.batch
        [ fetchedGoogleGroupMsgs FetchGoogleGroupSuccess
        , errorGoogleGroupMsgs FetchGoogleGroupError
        ]


main =
    Html.App.program
        { init = init
        , view = view
        , update = update
        , subscriptions = subscriptions
        }
