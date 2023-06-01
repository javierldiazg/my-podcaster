import { createSlice } from "@reduxjs/toolkit";

export const loaderSlice = createSlice({
  name: "loader",
  initialState: {
    show: true
  },
  reducers: {
    enableLoader: (state) => {
      state.show = true;
    },
    disableLoader: (state) => {
      state.show = false;
    }
  }
});

export const { enableLoader, disableLoader } = loaderSlice.actions;

export const selectLoader = (state) => state.loader.show;

export default loaderSlice.reducer;
