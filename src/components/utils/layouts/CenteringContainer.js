import classes from "./CenteringContainer.module.css";

function CenteredRow({ children }) {
  return <div className={classes.rowCenteringContainer}>{children}</div>;
}

function CenteredColumn({ children, ...props }) {
  return (
    <div className={classes.columnCenteringContainer} {...props}>
      {children}
    </div>
  );
}

export { CenteredRow, CenteredColumn };
