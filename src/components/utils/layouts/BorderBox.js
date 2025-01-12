import classes from "./BorderBox.module.css";

function BorderBox({ borderType, children }) {
  let borderStyle = classes.background;

  switch (borderType) {
    case "primary":
      borderStyle = classes.primary;
      break;
    case "secondary":
      borderStyle = classes.secondary;
      break;
    case "accent":
      borderStyle = classes.accent;
      break;
    case "special":
      borderStyle = classes.special;
      break;
    case "none":
      borderStyle = classes.none;
      break;
    case "background":
    default:
      borderStyle = classes.background;
      break;
  }

  return <div className={`${classes.borderBox} ${borderStyle}`}>{children}</div>;
}

export default BorderBox;
