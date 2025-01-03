import classes from "./CheckboxSet.module.css";

function CheckboxSet({ dataSet, setName, defaultValues, legendText, isRadio, suffix }) {
  return (
    <fieldset className={isRadio ? classes.radioButtons : classes.checkboxButtons}>
      <legend>{legendText}</legend>

      {dataSet.map((data) => {
        let defValue = isRadio
          ? defaultValues && defaultValues === data
          : defaultValues && defaultValues.findIndex((value) => value === data) >= 0;

        return (
          <div key={data}>
            <input
              type={isRadio ? "radio" : "checkbox"}
              id={data}
              value={data}
              name={setName}
              defaultChecked={defValue}
            />
            <label htmlFor={data}>{suffix ? `${data}${suffix}` : data}</label>
          </div>
        );
      })}
    </fieldset>
  );
}

export default CheckboxSet;
