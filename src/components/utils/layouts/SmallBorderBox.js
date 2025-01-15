import classes from "./SmallBorderBox.module.css";

function SmallBorderBox({ titleText, children, className, ...props }) {
  return (
    <>
      {titleText && (
        <header className={classes.smallBorderBoxHeader}>
          <h3>{titleText}</h3>
        </header>
      )}
      <div
        className={`${classes.smallBorderBox} ${className ? className : ""}`}
        {...props}
      >
        {children}
      </div>
    </>
  );
}

export default SmallBorderBox;
