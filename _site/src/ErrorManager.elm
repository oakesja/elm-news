module ErrorManager
    exposing
        ( Error
        , Model
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
import Components.ErrorToast as ErrorToast
import Analytics


type alias Error =
    { display : String
    , raw : String
    }


type alias Model =
    List ( Bool, Error )


init : Model
init =
    []


type Msg
    = AddError Error
    | AcknowledgeError Error


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        AddError error ->
            ( model ++ [ ( False, error ) ]
            , Cmd.batch
                [ ackErrorAfterNSeconds error 5
                , Analytics.error error.display error.raw
                    |> Analytics.registerEvent
                ]
            )

        AcknowledgeError error ->
            ( ackError error model
            , Cmd.none
            )


ackErrorAfterNSeconds : Error -> Float -> Cmd Msg
ackErrorAfterNSeconds error seconds =
    Task.perform
        (\_ -> AcknowledgeError error)
        (Process.sleep (Time.second * seconds))


ackError : Error -> Model -> Model
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
    div [] <|
        List.indexedMap errorView model


errorView : Int -> ( Bool, Error ) -> Html Msg
errorView index ( acked, error ) =
    let
        top =
            (index * 80) + 12
    in
        if acked then
            -- This is a hack for chrome since it will not refresh when the error toast is removed
            div [] [ text "&nbsp" ]
        else
            Html.map
                (\_ -> AcknowledgeError error)
                (ErrorToast.view error.display top)


noErrors : Model -> Bool
noErrors model =
    List.length model > 0
