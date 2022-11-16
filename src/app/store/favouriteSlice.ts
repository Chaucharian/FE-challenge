import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { People } from "@/commons/types";

export interface CounterState {
  favourites: People[];
}

const initialState: CounterState = {
  favourites: [],
};

export const favouritesSlice = createSlice({
  name: "favourites",
  initialState,
  reducers: {
    change: (state, { payload }) => {
      if (state.favourites.length) {
        if (
          state.favourites.find((favourite) => favourite.name === payload.name)
        ) {
          state.favourites = state.favourites.filter(
            (favourite) => favourite.name !== payload.name
          );
        } else {
          state.favourites.push(payload);
        }
      } else {
        state.favourites.push(payload);
      }
    },
  },
});

export const { change } = favouritesSlice.actions;

export const selectFavourites = (state: RootState) => state.favourites;

export default favouritesSlice.reducer;
