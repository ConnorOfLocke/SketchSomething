//import classes from "./LabeledCheckbox.module.css";

function LabeledCheckbox({ id, defaultChecked, label }) {
  return (
    <>
      <input type="checkbox" id={id} name={id} defaultChecked={defaultChecked} />
      <label htmlFor={id}>{label}</label>
    </>
  );
}

export default LabeledCheckbox;
