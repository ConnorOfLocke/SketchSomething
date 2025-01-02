import { configureStore } from "@reduxjs/toolkit";
import sessionSettingsSlice from "./session-settings-slice";

const store = configureStore({
  reducer: { sessionSettings: sessionSettingsSlice.reducer },
});

export default store;
