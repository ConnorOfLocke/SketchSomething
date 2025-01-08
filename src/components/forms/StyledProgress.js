import classes from "./StyledProgress.module.css";

function StyledProgress({ isPaused, ...props }) {
  return (
    <progress className={`${classes.progressBar} ${isPaused ? classes.paused : ""}`} {...props} />
  );
}

export default StyledProgress;
