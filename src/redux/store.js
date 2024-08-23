import { configureStore } from "@reduxjs/toolkit";
import { filterReducer } from "./filtersSlice";

// const visibleItems = campers.filter((item) =>
//   item.location.toLowerCase().includes(locationFilter.toLowerCase())
// );

export const store = configureStore({
  reducer: {
    filters: filterReducer,
  },
});
