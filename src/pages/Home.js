import classes from "./HomePage.module.css";
import SessionSettings from "../components/SessionSettings";
import { BorderBox, ContentBox } from "../components/utils/layouts";
import { useNavigate } from "react-router";
import { useState } from "react";

function HomePage() {
  const navigate = useNavigate();
  const [contentAnimatingOut, setContentAnimatingOut] = useState(false);

  function onSessionStart() {
    setContentAnimatingOut(true);

    setTimeout(() => {
      navigate("/session");
    }, 1000);
  }

  return (
    <ContentBox
      animateIn={!contentAnimatingOut}
      animateOut={contentAnimatingOut}
    >
      <BorderBox borderType={"background"}>
        <header>
          <h1>Sketch a thing!</h1>
        </header>
        <section className={classes.subtitleText}>
          <h3>Sketch and complete the prompts as fast as you can!</h3>
          <h3 className={classes.subtitleText}>
            Have fun and aim for "Done" with the time you have.
          </h3>
        </section>
        <SessionSettings onSessionStart={onSessionStart} />
      </BorderBox>
    </ContentBox>
  );
}

export default HomePage;
