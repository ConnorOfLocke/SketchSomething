import { useState } from "react";
import classes from "./FoldableArea.module.css";
import { CenteredRow } from "../utils/layouts";
import { IconWrapper } from "../utils/icons";

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
          <h3>{headerText}</h3>
        </CenteredRow>
      </button>
      <div className={showing ? "" : classes.hidden}>{children}</div>
    </section>
  );
}

export default FoldableArea;
