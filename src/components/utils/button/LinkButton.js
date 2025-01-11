//From https://whereisthemouse.com/how-to-use-button-as-link-in-react

const Button = ({ onClick, children, as: Component = "button", ...props }) => {
  return (
    <Component onClick={onClick} className="button" {...props}>
      {children}
    </Component>
  );
};

const LinkButton = ({ children, urlLink, ...props }) => {
  return (
    <Button as="a" href={urlLink} {...props}>
      {children}
    </Button>
  );
};

export default LinkButton;
