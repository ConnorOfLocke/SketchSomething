import { configureStore } from "@reduxjs/toolkit";
import sessionSettingsSlice from "./session-settings-slice";
import { localStorageListener, loadStoreFromLocalMemory } from "./session-settings-local-storage";
import uiStateSlice from "./ui-state-slice";

const store = configureStore({
  reducer: { sessionSettings: sessionSettingsSlice.reducer, uiState: uiStateSlice.reducer },
  preloadedState: loadStoreFromLocalMemory(),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(localStorageListener.middleware),
});

export default store;
