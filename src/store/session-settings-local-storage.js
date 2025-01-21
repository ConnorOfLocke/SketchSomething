import { createListenerMiddleware, isAnyOf } from "@reduxjs/toolkit";
import { sessionSettingsActions } from "./session-settings-slice";

const SETTINGS_KEY = "savedSessionSettings";

const loadStoreFromLocalMemory = () => {
  const loadedItem = localStorage.getItem(SETTINGS_KEY);
  if (loadedItem !== null) {
    return JSON.parse(loadedItem);
  }
};

//Saving the settings
const localStorageListener = createListenerMiddleware();

localStorageListener.startListening({
  matcher: isAnyOf(sessionSettingsActions.setSettings),
  effect: (action, listener) => {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(listener.getState()));
  },
});

export { loadStoreFromLocalMemory, localStorageListener };
