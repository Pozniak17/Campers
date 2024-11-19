// import { createSlice } from "@reduxjs/toolkit";

// const favouritesSlice = createSlice({
//   name: "favourites",
//   initialState: JSON.parse(localStorage.getItem("favorites")) || [],
//   reducers: {
//     toggleFavourite: (state, action) => {
//       const index = state.findIndex((fav) => fav._id === action.payload._id);
//       if (index === -1) {
//         state.push(action.payload);
//       } else {
//         state.splice(index, 1);
//       }
//       localStorage.setItem("favorites", JSON.stringify(state));
//     },
//     removeFromFavourites: (state, action) => {
//       const index = state.findIndex((fav) => fav._id === action.payload);
//       if (index !== -1) {
//         state.splice(index, 1);
//       }
//       localStorage.setItem("favorites", JSON.stringify(state));
//     },
//   },
// });

// export const { toggleFavourite, removeFromFavourites } =
//   favouritesSlice.actions;

// export const favouriteReducer = favouritesSlice.reducer;
