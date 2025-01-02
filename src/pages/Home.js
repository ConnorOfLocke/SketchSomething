import classes from "./HomePage.module.css";
import SessionSettings from "../components/SessionSettings";

function HomePage() {
  return (
    <div className={classes.content}>
      <div className={classes.innerContent}>
        <h1>Sketch Something!</h1>
        <SessionSettings />
      </div>
    </div>
  );
}

export default HomePage;
