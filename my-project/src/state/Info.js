import { createSlice } from "@reduxjs/toolkit";
const InfoSlice = createSlice({
  name: "Info",
  initialState: false,
  reducers: {
    More: (state) => {
      return (state = !state);
    },
  },
});

export const InfoActions = InfoSlice.actions;

export default InfoSlice;
