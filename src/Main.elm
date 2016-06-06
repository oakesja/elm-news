port module Main exposing (..)

import Html exposing (Html, text, div)
import Html.Attributes exposing (style)
import Html.App
import Http
import Task exposing (Task, andThen, mapError, succeed, fail)


type WithFetchState a
    = Success a
    | Error String
    | Loading


type alias Model =
    { elmDev : WithFetchState (List GoogleGroupMsg)
    , elmDiscuss : WithFetchState (List GoogleGroupMsg)
    }


type alias GoogleGroupMsg =
    { author : String
    , title : String
    , date : Int
    , description : String
    , link : String
    }


init : ( Model, Cmd Msg )
init =
    let
        model =
            { elmDev = Loading
            , elmDiscuss = Loading
            }

        fx =
            Cmd.batch
                [ fetchGoogleGroupMsgs "elm-dev"
                , fetchGoogleGroupMsgs "elm-discuss"
                ]
    in
        ( model
        , fx
        )


type Msg
    = FetchGoogleGroupSuccess GoogleGroupResp
    | FetchGoogleGroupError GoogleGroupError


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        FetchGoogleGroupSuccess resp ->
            let
                updatedModel =
                    case resp.group of
                        "elm-dev" ->
                            { model | elmDev = Success resp.messages }

                        "elm-discuss" ->
                            { model | elmDiscuss = Success resp.messages }

                        _ ->
                            model
            in
                ( updatedModel
                , Cmd.none
                )

        FetchGoogleGroupError error ->
            let
                updatedModel =
                    case error.group of
                        "elm-dev" ->
                            { model | elmDev = Error error.message }

                        "elm-discuss" ->
                            { model | elmDiscuss = Error error.message }

                        _ ->
                            model
            in
                ( updatedModel
                , Cmd.none
                )


view : Model -> Html Msg
view model =
    div
        [ style
            [ ( "display", "flex" )
            , ( "flex-direction", "column" )
            ]
        ]
        [ div [] [ text ("elm-dev: " ++ toString model.elmDev) ]
        , div [] [ text ("elm-discuss: " ++ toString model.elmDiscuss) ]
        ]


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
