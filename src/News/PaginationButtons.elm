module News.PaginationButtons exposing (Context, view)

import Html exposing (Html, div, text)
import Html.Attributes exposing (class)
import Html.Events
import Svg exposing (Svg, svg, path)
import Svg.Attributes exposing (d, viewBox, height, fill, transform)
import Svg.Events exposing (onClick)


type alias Context msg =
    { onNextPage : msg
    , onPreviousPage : msg
    , onFirstPage : msg
    , noOp : msg
    , currentPage : Int
    , morePages : Bool
    }


view : Context msg -> Html msg
view c =
    div [ class "elm_dark_blue" ]
        [ controls c ]


controls : Context msg -> Html msg
controls c =
    if not c.morePages && c.currentPage == 0 then
        text ""
    else if not c.morePages && c.currentPage == 1 then
        backButton c
    else if not c.morePages then
        backFirstButton c
    else if c.currentPage == 0 then
        nextButton c
    else if c.currentPage == 1 then
        nextBackButton c
    else
        nextBackFirstButton c


nextButton : Context msg -> Html msg
nextButton { onNextPage, noOp } =
    div
        [ class "pagination pagination--forward"
        , Html.Events.onClick onNextPage
        ]
        [ text "Next"
        , forwardIcon noOp
        ]


nextBackButton : Context msg -> Html msg
nextBackButton { onNextPage, onPreviousPage, currentPage } =
    div
        [ class "pagination"
        ]
        [ backwardsIcon onPreviousPage
        , text <| "Page " ++ toString (currentPage + 1)
        , forwardIcon onNextPage
        ]


backButton : Context msg -> Html msg
backButton { onPreviousPage, currentPage } =
    div
        [ class "pagination pagination--back"
        ]
        [ backwardsIcon onPreviousPage
        , text <| "Page " ++ toString (currentPage + 1)
        ]


nextBackFirstButton : Context msg -> Html msg
nextBackFirstButton { onNextPage, onPreviousPage, onFirstPage, currentPage } =
    div
        [ class "pagination"
        ]
        [ firstPageIcon onFirstPage
        , backwardsIcon onPreviousPage
        , text <| "Page " ++ toString (currentPage + 1)
        , forwardIcon onNextPage
        ]


backFirstButton : Context msg -> Html msg
backFirstButton { onPreviousPage, onFirstPage, currentPage } =
    div
        [ class "pagination pagination--first-back"
        ]
        [ firstPageIcon onFirstPage
        , backwardsIcon onPreviousPage
        , text <| "Page " ++ toString (currentPage + 1)
        ]


forwardIcon : msg -> Html msg
forwardIcon msg =
    svg
        [ Svg.Attributes.class "pagination__icon"
        , viewBox "0 0 24 24"
        , height "36"
        , fill "currentColor"
        , onClick msg
        ]
        [ path [ d "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" ] []
        ]


backwardsIcon : msg -> Html msg
backwardsIcon msg =
    svg
        [ Svg.Attributes.class "pagination__icon"
        , viewBox "0 0 24 24"
        , height "36"
        , fill "currentColor"
        , onClick msg
        ]
        [ path [ d "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" ] []
        ]


firstPageIcon : msg -> Html msg
firstPageIcon msg =
    svg
        [ Svg.Attributes.class "pagination__icon"
        , viewBox "0 0 24 24"
        , height "36"
        , fill "currentColor"
        , onClick msg
        ]
        [ path [ d "M17.41 7.41L16 6l-6 6 6 6 1.41-1.41L12.83 12z" ] []
        , path [ d "M12.41 7.41L11 6l-6 6 6 6 1.41-1.41L7.83 12z" ] []
        ]
