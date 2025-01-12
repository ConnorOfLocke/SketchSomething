import { useState } from "react";
import classes from "./FoldableArea.module.css";
import { CenteredRow } from ".";
import { IconWrapper } from "../icons";

function FoldableArea({ children, defaultShown, headerText }) {
  const [showing, setShowing] = useState(defaultShown);

  function onClickUnfold() {
    setShowing((prevState) => {
      return !prevState;
    });
  }

  return (
    <section className={classes.foldableArea}>
      <button type="button" onClick={onClickUnfold}>
        <IconWrapper iconID={showing ? "arrow-down" : "arrow-right"} size={"1.5rem"} />
        <CenteredRow>
          <h3 className={classes.foldableAreaTitle}>{headerText}</h3>
        </CenteredRow>
      </button>
      <div className={`${classes.hiddenContent} ${showing ? classes.shown : classes.hidden}`}>
        {children}
      </div>
    </section>
  );
}

export default FoldableArea;
