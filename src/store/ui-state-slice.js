import { createSlice } from "@reduxjs/toolkit";

const defaultUIState = {
  modalOpen: false,
  prefersDarkMode: false,
  overrideDarkMode: "",
  darkMode: false,
};

const uiStateSlice = createSlice({
  name: "uiState",
  initialState: defaultUIState,
  reducers: {
    setModalState(state, action) {
      state.modalOpen = action.payload;
    },
    setPreferDarkMode(state, action) {
      state.prefersDarkMode = action.payload;

      state.darkMode = Boolean(state.overrideDarkMode)
        ? state.overrideDarkMode === "dark"
        : state.prefersDarkMode;
    },
    setOverrideDarkMode(state, action) {
      state.overrideDarkMode = action.payload;

      state.darkMode = Boolean(state.overrideDarkMode)
        ? state.overrideDarkMode === "dark"
        : state.prefersDarkMode;
    },
  },
});

export const uiStateActions = uiStateSlice.actions;
export default uiStateSlice;
