module NewslettersPage exposing (Model, Msg, init, view, update, onPageLoad)

import Html exposing (Html, div, text, h1, span, a)
import Html.Attributes exposing (class, href)
import Newsletter.NewsletterFile as NewsletterFile exposing (NewsletterFile)
import Links
import Date.Format
import Date
import FetchData exposing (FetchData)
import Components.Spinner


type alias Model =
    {}


init : Model
init =
    {}


onPageLoad : Cmd Msg
onPageLoad =
    Cmd.none


type Msg
    = NoOp


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        NoOp ->
            model ! []


view : FetchData (List NewsletterFile) -> Model -> Html Msg
view files model =
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
                ++ (newsletters files)
        ]


newsletters : FetchData (List NewsletterFile) -> List (Html Msg)
newsletters files =
    case files of
        FetchData.NotStarted ->
            [ text "" ]

        FetchData.Fetching ->
            [ div
                [ class "newsletters__spinner" ]
                [ Components.Spinner.view ]
            ]

        FetchData.Fetched newsletters ->
            List.sortBy (Date.toTime << .date) newsletters
                |> List.indexedMap newsletterView
                |> List.reverse

        FetchData.Failed error ->
            [ text "" ]


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
