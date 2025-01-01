import classes from "./CheckboxSet.module.css";

function CheckboxSet({ dataSet, setName, legendText, isRadio, ...props }) {
  return (
    <fieldset className={isRadio ? classes.radioButtons : classes.checkboxButtons} {...props}>
      <legend>{legendText}</legend>
      {dataSet.map((data) => (
        <div key={data}>
          <input type={isRadio ? "radio" : "checkbox"} id={data} value={data} name={setName} />
          <label htmlFor={data}>{data}</label>
        </div>
      ))}
    </fieldset>
  );
}

export default CheckboxSet;
