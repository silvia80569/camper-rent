import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "./favoritesSlice";
import filtersReducer from "./filtersSlice";
import advertReducer from "./advertSlice";

export const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
    filters: filtersReducer,
    advert: advertReducer,
  },
});
