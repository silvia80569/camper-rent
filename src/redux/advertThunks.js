import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAdvertById, updateAdvert } from "../api/adverts"; // ajustează path-ul dacă e diferit
import { setSelectedAdvert } from "./advertSlice";

export const addReviewAsync = createAsyncThunk(
  "advert/addReviewAsync",
  async ({ advertId, review }, { dispatch }) => {
    const advert = await getAdvertById(advertId);

    const updatedReviews = advert.reviews
      ? [...advert.reviews, review]
      : [review];

    const updatedAdvert = await updateAdvert(advertId, {
      ...advert,
      reviews: updatedReviews,
    });

    dispatch(setSelectedAdvert(updatedAdvert));
    return updatedAdvert;
  }
);
