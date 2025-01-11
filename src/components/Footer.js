import { useState } from "react";
import AboutModal from "../pages/About";
import classes from "./Footer.module.css";

function Footer() {
  const [aboutModalOpen, setAboutModalOpen] = useState();

  function onAboutClick() {
    setAboutModalOpen(true);
  }

  return (
    <>
      <AboutModal open={aboutModalOpen} onClose={() => setAboutModalOpen(false)} />
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
