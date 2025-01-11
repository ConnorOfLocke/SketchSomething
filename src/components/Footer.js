import classes from "./Footer.module.css";

function Footer() {
  function onAboutClick() {
    console.log("Aboot");
  }

  return (
    <footer className={classes.footer}>
      <header>
        <button onClick={onAboutClick}>
          <h3>About</h3>
        </button>
      </header>
    </footer>
  );
}

export default Footer;
