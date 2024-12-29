import { createSlice } from "@reduxjs/toolkit";

interface MainState {
  sidebarActive: boolean;
  isLogged: boolean;
}

const initialState: MainState = {
  sidebarActive: false,
  isLogged: false,
};

const MainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.sidebarActive = !state.sidebarActive;
    },
    login: (state) => {
      state.isLogged = !state.isLogged;
    },
  },
});

export const { toggleSidebar, login } = MainSlice.actions;
export default MainSlice.reducer;
