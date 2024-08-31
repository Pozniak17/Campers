import { configureStore } from "@reduxjs/toolkit";
import { filterReducer } from "./filtersSlice";
import { favouriteReducer } from "./favouritesSlice";
import { campersReducer } from "./campersSlice";

// const visibleItems = campers.filter((item) =>
//   item.location.toLowerCase().includes(locationFilter.toLowerCase())
// );

export const store = configureStore({
  reducer: {
    campers: campersReducer,
    filters: filterReducer,
    favourites: favouriteReducer,
  },
});
