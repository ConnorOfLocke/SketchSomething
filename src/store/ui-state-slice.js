import { createSlice } from "@reduxjs/toolkit";

const defaultUIState = {
  modalOpen: false,
};

const uiStateSlice = createSlice({
  name: "uiState",
  initialState: defaultUIState,
  reducers: {
    setModalState(state, action) {
      state.modalOpen = action.payload;
    },
  },
});

export const uiStateActions = uiStateSlice.actions;
export default uiStateSlice;
