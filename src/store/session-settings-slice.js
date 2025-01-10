import { createSlice } from "@reduxjs/toolkit";

const defaultSessionSettings = {
  setTime: 1,
  setQuantity: 3,
  promptsPerSet: 8,
  subjects: ["Animals"],
  stretches: true,
};

const sessionSettingsSlice = createSlice({
  name: "sessionSettings",
  initialState: defaultSessionSettings,
  reducers: {
    setSettings(state, action) {
      console.log(action.payload);
      console.log({ ...state, ...action.payload });
      return { ...state, ...action.payload };
    },
  },
});

export const sessionSettingsActions = sessionSettingsSlice.actions;
export default sessionSettingsSlice;
