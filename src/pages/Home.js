import classes from "./HomePage.module.css";
import SessionSettings from "../components/SessionSettings";
import { BorderBox, ContentBox } from "../components/utils/layouts";

function HomePage() {
  return (
    <ContentBox animate>
      <BorderBox borderType={"background"}>
        <header>
          <h1>Sketch a thing!</h1>
        </header>
        <section className={classes.subtitleText}>
          <h3>Sketch the prompts as fast as you can, with whatever you have</h3>
          <h3 className={classes.subtitleText}>
            Have fun and aim for "done" over perfect!
          </h3>
        </section>
        <SessionSettings />
      </BorderBox>
    </ContentBox>
  );
}

export default HomePage;
