import { useDispatch, useSelector } from "react-redux";
import { uiStateActions } from "../store/ui-state-slice";
import usePrefersDarkMode from "../hooks/usePrefersDarkMode";
import { useEffect } from "react";

function DarkModeWrapper({ children }) {
  const { overrideDarkMode, prefersDarkMode } = useSelector(
    (state) => state.uiState
  );
  const dispatch = useDispatch();

  function SetDarkmode(isDarkMode) {
    document.body.setAttribute("data-theme", isDarkMode ? "dark" : "light");
  }

  usePrefersDarkMode((darkMode) => {
    dispatch(uiStateActions.setPreferDarkMode(darkMode));
  });

  useEffect(() => {
    if (overrideDarkMode) {
      SetDarkmode(overrideDarkMode === "dark");
    } else {
      SetDarkmode(prefersDarkMode);
    }
  }, [overrideDarkMode, prefersDarkMode]);

  return children;
}

export default DarkModeWrapper;
