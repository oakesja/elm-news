module NewslettersPage exposing (Model, Msg, init, view, update)

import Html exposing (Html, div, text, h1, span, a)
import Html.Attributes exposing (class, href, tabindex, attribute)
import Html.Events exposing (onClick)
import HtmlEvents exposing (onEnter)
import Newsletter.NewsletterFile as NewsletterFile exposing (NewsletterFile)
import Links
import Date.Format
import Date
import FetchData exposing (FetchData)
import Navigation
import Analytics


type alias Model =
    {}


init : ( Model, Cmd Msg )
init =
    {} ! []


type Msg
    = GoToNewletter String
    | GoToSignup


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        GoToNewletter name ->
            model
                ! [ Navigation.modifyUrl (Links.newsletter name)
                  ]

        GoToSignup ->
            model
                ! [ Analytics.newsletterSignup
                        |> Analytics.registerEvent
                  ]


view : FetchData (List NewsletterFile) -> Model -> Html Msg
view files model =
    div [ class "newsletters__row" ]
        [ div [ class "newsletters__col" ] <|
            [ h1 [ class "newletters__header" ] [ text "Weekly Top News Archive" ]
            , span [ class "newsletters__description" ]
                [ text
                    """
                    Every Monday a newsletter is sent out for the previous
                    week's top visited elm news articles from the site.
                    This is an archive for past newsletters.
                    """
                ]
            , div [ class "signup__row" ]
                [ a
                    [ href Links.newsletterSignup
                    , onClick GoToSignup
                    , class "signup__button"
                    ]
                    [ text "Subscribe" ]
                ]
            , newsletters files
            ]
        ]


newsletters : FetchData (List NewsletterFile) -> Html Msg
newsletters files =
    FetchData.view newslettersView files


newslettersView : List NewsletterFile -> Html Msg
newslettersView newsletters =
    List.sortBy (Date.toTime << .date) newsletters
        |> List.indexedMap newsletterView
        |> List.reverse
        |> div [ class "newsletters" ]


newsletterView : Int -> NewsletterFile -> Html Msg
newsletterView index file =
    let
        issue =
            toString (index + 1)
    in
        span [ class "newsletters__file" ]
            [ text <| "#" ++ issue ++ " ― "
            , span
                [ class "internal__link"
                , onClick (GoToNewletter file.name)
                , tabindex 0
                , attribute "row" "button"
                , onEnter (GoToNewletter file.name)
                ]
                [ file.date
                    |> Date.Format.format "%b %d, %Y"
                    |> text
                ]
            ]
