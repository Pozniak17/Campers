// import { createSlice } from "@reduxjs/toolkit";
// // Імпортуємо операцію
// import { fetchCampers } from "./operations";

// const campersSlice = createSlice({
//   name: "campers",
//   initialState: {
//     items: [],
//     isLoading: false,
//     error: null,
//   },
//   // додаємо обробку зовнішніх екшенів
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchCampers.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(fetchCampers.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.error = null;
//         state.items = action.payload;
//       })
//       .addCase(fetchCampers.rejected, (state, action) => {
//         state.isLoading = false;
//         state.error = action.payload;
//       });
//   },
// });

// export const campersReducer = campersSlice.reducer;
