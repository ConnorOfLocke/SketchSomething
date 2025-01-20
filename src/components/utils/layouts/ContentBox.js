import classes from "./ContentBox.module.css";

function ContentBox({ children, animateIn, animateOut, fadeIn }) {
  let contentClasses = classes.innerContent;
  if (animateIn)
    contentClasses = contentClasses.concat(` ${classes.animateIn}`);
  if (animateOut)
    contentClasses = contentClasses.concat(` ${classes.animateOut}`);
  if (fadeIn) contentClasses = contentClasses.concat(` ${classes.fadeIn}`);

  return (
    <div className={classes.content}>
      <div className={contentClasses}>{children}</div>
    </div>
  );
}

export default ContentBox;
