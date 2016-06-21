module ErrorManager
    exposing
        ( Model
        , Msg(AddError)
        , init
        , update
        , view
        , noErrors
        )

import Task exposing (andThen)
import Process
import Time
import Html exposing (Html, div, text)
import Html.App
import ErrorToast


type alias Model =
    List ( Bool, String )


init : Model
init =
    []


type Msg
    = AddError String
    | AcknowledgeError String


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        AddError error ->
            ( model ++ [ ( False, error ) ]
            , Task.perform (\_ -> AcknowledgeError error)
                (\_ -> AcknowledgeError error)
                (Process.sleep (Time.second * 5))
            )

        AcknowledgeError error ->
            ( ackError error model
            , Cmd.none
            )


ackError : String -> Model -> Model
ackError error model =
    case model of
        [] ->
            model

        ( acked, e ) :: model ->
            if e == error then
                ( True, error ) :: model
            else
                ( acked, e ) :: ackError error model


view : Model -> Html Msg
view model =
    div []
        <| List.indexedMap errorView model


errorView : Int -> ( Bool, String ) -> Html Msg
errorView index ( acked, error ) =
    let
        top =
            (index * 80) + 12
    in
        if acked then
            -- This is a hack for chrome since it will not refresh when the error toast is removed
            div [] [ text "&nbsp" ]
        else
            Html.App.map (\_ -> AcknowledgeError error) (ErrorToast.view error top)


noErrors : Model -> Bool
noErrors model =
    List.length model > 0
