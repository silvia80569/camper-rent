/* eslint-disable no-useless-catch */
import axios from "axios";

const BASE_URL = "https://6823af7a65ba0580339799c2.mockapi.io";

export const getAdverts = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/adverts`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getAdvertById = async (id) => {
  try {
    const advertResponse = await axios.get(`${BASE_URL}/adverts/${id}`);
    const advertData = advertResponse.data;

    const reviewsResponse = await axios.get(
      `${BASE_URL}/reviews?advertId=${id}`
    );
    const reviewsData = reviewsResponse.data;

    return {
      ...advertData,
      reviews: reviewsData,
    };
  } catch (error) {
    throw error;
  }
};

export const updateAdvert = async (id, updatedData) => {
  try {
    const response = await axios.put(`${BASE_URL}/adverts/${id}`, updatedData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
