import { useEffect } from "react";

export default function usePrefersDarkMode(onDarkModeChange) {
  useEffect(() => {
    const mediaCheck = window.matchMedia("(prefers-color-scheme: dark)");

    //Call it on first hit
    onDarkModeChange(mediaCheck.matches);

    //add it to the listener
    const listener = window.addEventListener(
      "change",
      onDarkModeChange(mediaCheck.matches)
    );

    return () => {
      window.removeEventListener("change", listener);
    };
  }, [onDarkModeChange]);
}
