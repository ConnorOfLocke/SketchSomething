import { createSlice } from "@reduxjs/toolkit";

const defaultSessionSettings = {
  sessionTime: 30,
  setTimes: [10, 10, 10],
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
