import { createSlice } from "@reduxjs/toolkit";
import { addReviewAsync } from "./advertThunks";

const initialState = {
  selectedAdvert: null,
};

const advertSlice = createSlice({
  name: "advert",
  initialState,
  reducers: {
    setSelectedAdvert: (state, action) => {
      state.selectedAdvert = action.payload;
    },
    clearSelectedAdvert: (state) => {
      state.selectedAdvert = null;
    },
    addReview: (state, action) => {
      if (state.selectedAdvert) {
        if (!state.selectedAdvert.reviews) {
          state.selectedAdvert.reviews = [];
        }
        state.selectedAdvert.reviews.push(action.payload);
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addReviewAsync.fulfilled, (state, action) => {
      state.selectedAdvert = action.payload;
    });
  },
});

export const { setSelectedAdvert, clearSelectedAdvert, addReview } =
  advertSlice.actions;
export default advertSlice.reducer;
