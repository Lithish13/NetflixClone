import { configureStore } from "@reduxjs/toolkit";
import fqaSlice from "./fQA";
import InfoSlice from "./Info";
const store = configureStore({
  reducer: {
    fqa: fqaSlice.reducer,
    Info: InfoSlice.reducer,
  },
});

export default store;
