import { createSlice } from "@reduxjs/toolkit";

const defaultUIState = {
  modalOpen: false,
  prefersDarkMode: false,
  overrideDarkMode: "",
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
    },
    setOverrideDarkMode(state, action) {
      state.overrideDarkMode = action.payload;
    },
  },
});

export const uiStateActions = uiStateSlice.actions;
export default uiStateSlice;
