import classes from "./ContentBox.module.css";

function ContentBox({ children, animate }) {
  return (
    <div className={classes.content}>
      <div className={`${classes.innerContent} ${animate ? classes.animateIn : ""}`}>
        {children}
      </div>
    </div>
  );
}

export default ContentBox;
