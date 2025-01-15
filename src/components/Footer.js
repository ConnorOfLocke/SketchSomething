import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AboutModal from "./modals/About";
import classes from "./Footer.module.css";
import ToDoModal from "./modals/Todo";
import { IconWrapper } from "./utils/icons";
import { uiStateActions } from "../store/ui-state-slice";

function Footer() {
  const [aboutModalOpen, setAboutModalOpen] = useState();
  const [toDoModalOpen, setToDoModalOpen] = useState();
  const { overrideDarkMode, prefersDarkMode } = useSelector(
    (state) => state.uiState
  );
  const dispatch = useDispatch();

  const currDarkMode = Boolean(overrideDarkMode)
    ? overrideDarkMode === "dark"
    : prefersDarkMode;

  function onAboutClick() {
    setAboutModalOpen(true);
  }

  function onToDoClick() {
    setToDoModalOpen(true);
  }

  function toggleDarkMode() {
    dispatch(
      uiStateActions.setOverrideDarkMode(!currDarkMode ? "dark" : "light")
    );
  }

  return (
    <>
      <AboutModal
        open={aboutModalOpen}
        onConfirm={() => setAboutModalOpen(false)}
      />
      <ToDoModal
        open={toDoModalOpen}
        onConfirm={() => setToDoModalOpen(false)}
      />
      <footer className={classes.footer}>
        <header className={classes.about}>
          <button onClick={onAboutClick}>
            <h3>About</h3>
          </button>
        </header>
        <header className={classes.todo}>
          <button onClick={onToDoClick}>
            <h3>To-Do</h3>
          </button>
        </header>
        <header className={classes.darkMode}>
          <button onClick={toggleDarkMode}>
            <IconWrapper
              iconID={!currDarkMode ? "darkmode" : "lightmode"}
              size="2rem"
            />
          </button>
        </header>
      </footer>
    </>
  );
}

export default Footer;
