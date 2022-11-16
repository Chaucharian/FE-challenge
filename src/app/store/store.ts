import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import favouriteSlice from "./favouriteSlice";

export const store = configureStore({
  reducer: {
    favourites: favouriteSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
