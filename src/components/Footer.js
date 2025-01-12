import { useState } from "react";
import AboutModal from "./modals/About";
import classes from "./Footer.module.css";

function Footer() {
  const [aboutModalOpen, setAboutModalOpen] = useState();

  function onAboutClick() {
    setAboutModalOpen(true);
  }

  return (
    <>
      <AboutModal open={aboutModalOpen} onConfirm={() => setAboutModalOpen(false)} />
      <footer className={classes.footer}>
        <header>
          <button onClick={onAboutClick}>
            <h3>About</h3>
          </button>
        </header>
      </footer>
    </>
  );
}

export default Footer;
