module Css.Mixins exposing (..)

import Css exposing (..)


flexRow : Mixin
flexRow =
    mixin
        [ displayFlex
        , flexDirection row
        ]


flexColumn : Mixin
flexColumn =
    mixin
        [ displayFlex
        , flexDirection column
        ]


justifyCenter : Mixin
justifyCenter =
    property "justify-content" "center"
