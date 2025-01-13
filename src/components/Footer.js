import { useState } from "react";
import AboutModal from "./modals/About";
import classes from "./Footer.module.css";
import ToDoModal from "./modals/Todo";

function Footer() {
  const [aboutModalOpen, setAboutModalOpen] = useState();
  const [toDoModalOpen, setToDoModalOpen] = useState();

  function onAboutClick() {
    setAboutModalOpen(true);
  }

  function onToDoClick() {
    setToDoModalOpen(true);
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
      </footer>
    </>
  );
}

export default Footer;
