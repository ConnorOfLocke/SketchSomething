import classes from "./HomePage.module.css";
import SessionSettings from "../components/SessionSettings";
import { BorderBox, CenteredColumn, ContentBox } from "../components/utils/layouts";
import { StyledButton } from "../components/utils/button";

function HomePage() {
  return (
    <ContentBox animate>
      <BorderBox borderType={"background"}>
        <header>
          <h1>Sketch Something!</h1>
        </header>
        <section className={classes.subtitleText}>
          <h3>Sketch the prompts as fast as you can, with whatever you have</h3>
          <h3 className={classes.subtitleText}>Have fun and aim for "done" over perfect!</h3>
        </section>
        <SessionSettings />
        <div>
          <CenteredColumn>
            <StyledButton buttonType="primary">Start Warm Up</StyledButton>
            <StyledButton buttonType="primary">Full Session!</StyledButton>
          </CenteredColumn>
        </div>
      </BorderBox>
    </ContentBox>
  );
}

export default HomePage;
