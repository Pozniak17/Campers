import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://6602f96b9d7276a75554be5d.mockapi.io";

//! createAsyncThunk
export const fetchCampers = createAsyncThunk(
  "campers/fetchAll",
  async ({ limit, page }, thunkAPI) => {
    try {
      const response = await axios.get("/advert", {
        params: {
          limit,
          page,
        },
      });
      // при успішному запиті повертаємо проміс із даними
      return response.data;
    } catch (error) {
      // при помилці повертаємо проміс який буде відхилено з текстом помилки
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
