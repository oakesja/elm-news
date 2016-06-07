port module Main exposing (..)

import Html exposing (Html, a, text, div)
import Html.Attributes exposing (style, href)
import Html.App


type alias Model =
    { messages : List GoogleGroupMsg
    , errors : List ( String, String )
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


view : Model -> Html Msg
view model =
    div []
        <| List.map newsView
        <| List.reverse
        <| List.sortBy .date model.messages


newsView : GoogleGroupMsg -> Html Msg
newsView msg =
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
                [ text msg.author ]
            ]
        , div
            [ style
                [ ( "align-self", "center" )
                , ( "flex-grow", "1" )
                , ( "text-align", "right" )
                ]
            ]
            [ text <| toString msg.date ]
        ]


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
