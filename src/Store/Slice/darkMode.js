import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  theme: false,
};
const darkMode = createSlice({
  name: "darkMode",
  initialState,
  reducers: {
    mode: (state) => {
      state.theme = !state.theme;
    },
  },
});
export const { mode } = darkMode.actions;
export default darkMode.reducer