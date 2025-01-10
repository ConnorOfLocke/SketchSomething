import classes from "./StyledCheckbox.module.css";

function StyledCheckbox({ id, value, setName, defaultChecked, suffix }) {
  return (
    <div className={classes.styledCheckbox}>
      <input
        key={id}
        type="checkbox"
        id={id}
        value={value}
        name={setName}
        defaultChecked={defaultChecked}
      />
      <label key={`${id}_label`} htmlFor={id}>
        {suffix ? `${value}${suffix}` : value}
      </label>
    </div>
  );
}

export default StyledCheckbox;
