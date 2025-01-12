import classes from "./StyledButton.module.css";

function StyledButton({ buttonType = "primary", children, ...props }) {
  let buttonStyle = classes.primaryStyledButton;
  switch (buttonType) {
    case "secondary":
      buttonStyle = classes.secondaryStyledButton;
      break;
    case "primary":
    default:
      buttonStyle = classes.primaryStyledButton;
      break;
  }

  return (
    <button className={buttonStyle} {...props}>
      {children}
    </button>
  );
}

export default StyledButton;
