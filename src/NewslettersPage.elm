module NewslettersPage exposing (Model, Msg, init, view, update, onPageLoad)

import Html exposing (Html, div, text)
import Newsletter.NewsletterFile as NewsletterFile exposing (NewsletterFile)
import Task
import Http


type alias Model =
    { files : List NewsletterFile
    }


init : Model
init =
    { files = []
    }


onPageLoad : Cmd Msg
onPageLoad =
    Task.perform
        FailedToFetchFiles
        FetchedFiles
        NewsletterFile.fetch


type Msg
    = FailedToFetchFiles Http.Error
    | FetchedFiles (List NewsletterFile)


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        FailedToFetchFiles error ->
            model ! []

        FetchedFiles files ->
            { model | files = files } ! []


view : Model -> Html Msg
view model =
    div [] [ List.length model.files |> toString |> text ]
