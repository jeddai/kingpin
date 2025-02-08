import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import userReducer from "./userSlice"

export const store = configureStore({
  reducer: {
    user: userReducer
  }
})

export type KingpinStore = typeof store
export type RootState = ReturnType<KingpinStore['getState']>
export type KingpinDispatch = KingpinStore['dispatch']
export type KingpinThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>
