import { createSlice } from "@reduxjs/toolkit";

const defaultSessionSettings = {
  setTime: 1,
  setQuantity: 3,
  promptsPerSet: 8,
  subjects: ["Animals"],
  encouraging: true,
  exercises: true,
};

const sessionSettingsSlice = createSlice({
  name: "sessionSettings",
  initialState: defaultSessionSettings,
  reducers: {
    setSettings(state, action) {
      state = { ...state, ...action.payload };
    },
    //resetSettings(state, action) {},
  },
});

export const sessionSettingsActions = sessionSettingsSlice.actions;
export default sessionSettingsSlice;
