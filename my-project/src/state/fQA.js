import { createSlice } from "@reduxjs/toolkit";
const fqaSlice = createSlice({
  name: "fqa",
  initialState: false,
  reducers: {
    plus: (state) => {
      return (state = !state);
    },
  },
});

export const faqActions = fqaSlice.actions;

export default fqaSlice;
