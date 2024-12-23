import { createSlice } from "@reduxjs/toolkit";

interface MainState {
  isLogged: boolean;
}

const initialState: MainState = {
  isLogged: false,
};

const MainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    login: (state) => {
      state.isLogged = !state.isLogged;
    },
  },
});

export const { login } = MainSlice.actions;
export default MainSlice.reducer;
