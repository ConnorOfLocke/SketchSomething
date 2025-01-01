import classes from "./PageLayout.module.css";

export function PageLayout({ children }) {
  return (
    <div className={classes.content}>
      <div className={classes.innerContent}>{children}</div>
    </div>
  );
}
