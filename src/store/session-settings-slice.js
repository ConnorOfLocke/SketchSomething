import { createSlice } from "@reduxjs/toolkit";
import { SET_TIME, PROMPTS_PER_SET } from "../data/settings";
import { SUBJECTS } from "../data/subjects";

const defaultSessionSettings = {
  sets: [
    { prompts: 8, time: 1, subject: "Animals", graduallyMoreTime: true },
    { prompts: 4, time: 2, subject: "Emotions", graduallyMoreTime: true },
    { prompts: 4, time: 5, subject: "Textures", graduallyMoreTime: true },
  ],
  stretches: true,
};

const sessionSettingsSlice = createSlice({
  name: "sessionSettings",
  initialState: defaultSessionSettings,
  reducers: {
    setSettings(state, action) {
      return { ...state, ...action.payload };
    },
    setNewSetNumber(state, action) {
      const newSets = [...state.sets];

      while (newSets.length < action.payload) {
        newSets.push({
          prompts: PROMPTS_PER_SET[0],
          time: SET_TIME[0],
          subject: SUBJECTS[0].name,
          graduallyMoreTime: true,
        });
      }
      newSets.length = action.payload;

      return { ...state, sets: newSets };
    },
  },
});

export const sessionSettingsActions = sessionSettingsSlice.actions;
export default sessionSettingsSlice;
