import { createSlice } from "@reduxjs/toolkit";

const defaultSessionSettings = {
  setTime: 1,
  setQuantity: 3,
  promptsPerSet: 8,
  subjects: ["Animals"],
  stretches: true,
  graduallyMoreTime: true,
};

const sessionSettingsSlice = createSlice({
  name: "sessionSettings",
  initialState: defaultSessionSettings,
  reducers: {
    setSettings(state, action) {
      return { ...state, ...action.payload };
    },
  },
});

export const sessionSettingsActions = sessionSettingsSlice.actions;
export default sessionSettingsSlice;
