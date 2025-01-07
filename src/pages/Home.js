import classes from "./HomePage.module.css";
import SessionSettings from "../components/SessionSettings";

function HomePage() {
  return (
    <div className={classes.content}>
      <div className={classes.innerContent}>
        <div className={classes.borderBox}>
          <header>
            <h1>Sketch Something!</h1>
          </header>
          <SessionSettings />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
