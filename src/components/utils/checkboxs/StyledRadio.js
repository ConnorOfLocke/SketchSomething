import classes from "./StyledRadio.module.css";

function StyledRadio({ id, value, setName, defaultChecked, suffix, onClick }) {
  return (
    <div className={classes.styledRadio}>
      <input
        key={id}
        type="radio"
        id={id}
        value={value}
        name={setName}
        defaultChecked={defaultChecked}
        onClick={onClick}
      />
      <label key={`${id}_label`} htmlFor={id}>
        {suffix ? `${value}${suffix}` : value}
      </label>
    </div>
  );
}

export default StyledRadio;
