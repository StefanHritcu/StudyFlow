import { configureStore } from "@reduxjs/toolkit";
import MainSlice from "./slices/MainSlice";

export const store = configureStore({
  reducer: {
    main: MainSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
