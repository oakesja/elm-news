module NewslettersPage exposing (Model, Msg, init, view, update, onPageLoad)

import Html exposing (Html, div, text, h1, span, a)
import Html.Attributes exposing (class, href)
import Newsletter.NewsletterFile as NewsletterFile exposing (NewsletterFile)
import Task
import Http
import Links
import Date.Format
import Date


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
    div [ class "newsletters__row" ]
        [ div [ class "newsletters__col" ] <|
            [ h1 [] [ text "Weekly Top News Archive" ]
            , span [ class "newsletters__description" ]
                [ text
                    """
                    Every Monday a newsletter is sent out for the previous
                    week's top visited elm news articles from the site.
                    This is an archive for these past newsletters.
                    If you are interested, then please
                    """
                , a
                    [ href Links.newsletterSignup
                    , class "internal__link"
                    ]
                    [ text "subscribe here" ]
                , text "."
                ]
            ]
                ++ (newsletters model.files)
        ]


newsletters : List NewsletterFile -> List (Html Msg)
newsletters files =
    List.sortBy (Date.toTime << .date) files
        |> List.indexedMap newsletterView
        |> List.reverse


newsletterView : Int -> NewsletterFile -> Html Msg
newsletterView index file =
    let
        issue =
            toString (index + 1)
    in
        span [ class "newsletters__file" ]
            [ text <| "#" ++ issue ++ " ― "
            , a
                [ href <| Links.newsletter file.name
                , class "internal__link"
                ]
                [ file.date
                    |> Date.Format.format "%b %d, %Y"
                    |> text
                ]
            ]
