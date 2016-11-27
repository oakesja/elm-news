effect module Window where { subscription = MySub } exposing
  ( Size
  , size, width, height
  , resizes
  )

{-| Your application lives in some sort of window. This library helps you
figure out how big that window is.

# Window Size
@docs Size, size, width, height, resizes

-}

import Dom.LowLevel as Dom
import Json.Decode as Json
import Native.Window
import Process
import Task exposing (Task)



{-| The size of the window in pixels.
-}
type alias Size =
  { width : Int
  , height : Int
  }


{-| Get the current window size.
-}
size : Task x Size
size =
  Native.Window.size


{-| Get the current window width.
-}
width : Task x Int
width =
  Task.map .width size


{-| Get the current window height.
-}
height : Task x Int
height =
  Task.map .height size


{-| Subscribe to any changes in window size.
-}
resizes : (Size -> msg) -> Sub msg
resizes tagger =
  subscription (MySub tagger)



-- SUBSCRIPTIONS


type MySub msg
  = MySub (Size -> msg)


subMap : (a -> b) -> MySub a -> MySub b
subMap func (MySub tagger) =
  MySub (tagger >> func)



-- EFFECT MANAGER


type alias State msg =
  Maybe
    { subs : List (MySub msg)
    , pid : Process.Id
    }


init : Task Never (State msg)
init =
  Task.succeed Nothing


(&>) task1 task2 =
  Task.andThen (\_ -> task2) task1


onEffects : Platform.Router msg Size -> List (MySub msg) -> State msg -> Task Never (State msg)
onEffects router newSubs oldState =
  case (oldState, newSubs) of
    (Nothing, []) ->
      Task.succeed Nothing

    (Just {pid}, []) ->
      Process.kill pid
        &> Task.succeed Nothing

    (Nothing, _) ->
      Process.spawn (Dom.onWindow "resize" (Json.succeed ()) (\_ -> Task.andThen (Platform.sendToSelf router) size))
        |> Task.andThen (\pid -> Task.succeed (Just { subs = newSubs, pid = pid }))

    (Just {pid}, _) ->
      Task.succeed (Just { subs = newSubs, pid = pid })


onSelfMsg : Platform.Router msg Size -> Size -> State msg -> Task Never (State msg)
onSelfMsg router dimensions state =
  case state of
    Nothing ->
      Task.succeed state

    Just {subs} ->
      let
        send (MySub tagger) =
          Platform.sendToApp router (tagger dimensions)
      in
        Task.sequence (List.map send subs)
          &> Task.succeed state

