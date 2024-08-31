import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filters",
  initialState: {
    campers: [],
    isLoading: false,
    error: null,
    locationFilter: "",
    visibleItems: [],
  },
  reducers: {
    locationFilter(state, action) {
      state.visibleItems = state.campers.filter((item) =>
        item.location.toLowerCase().includes(action.payload.toLowerCase())
      );

      state.locationFilter = action.payload;
    },
  },
});

// генератор екшену
export const { locationFilter } = filterSlice.actions;

// редюсер слайсу
export const filterReducer = filterSlice.reducer;
