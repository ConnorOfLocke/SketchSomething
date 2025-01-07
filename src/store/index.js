import { configureStore } from "@reduxjs/toolkit";
import sessionSettingsSlice from "./session-settings-slice";
import { localStorageListener, loadStoreFromLocalMemory } from "./session-settings-local-storage";

const store = configureStore({
  reducer: { sessionSettings: sessionSettingsSlice.reducer },
  preloadedState: loadStoreFromLocalMemory(),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(localStorageListener.middleware),
});

export default store;
