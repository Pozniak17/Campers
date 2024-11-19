// import axios from "axios";
// import { createAsyncThunk } from "@reduxjs/toolkit";

// axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

// //! createAsyncThunk
// export const fetchCampers = createAsyncThunk(
//   "campers/fetchAll",
//   async ({ limit, page }, thunkAPI) => {
//     try {
//       const response = await axios.get("/campers", {
//         params: {
//           limit,
//           page,
//         },
//       });
//       console.log(response.data);
//       // при успішному запиті повертаємо проміс із даними
//       return response.data;
//     } catch (error) {
//       // при помилці повертаємо проміс який буде відхилено з текстом помилки
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
