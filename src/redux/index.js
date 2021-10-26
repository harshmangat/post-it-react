import { configureStore } from "@reduxjs/toolkit";

import postSlice from "./slices/post-slice";

const store = configureStore({
  reducer: {
    post: postSlice.reducer,
  },
});

export default store;
