import classes from "./CheckboxSet.module.css";
import StyledCheckbox from "./StyledCheckbox";
import StyledRadio from "./StyledRadio";

function CheckboxSet({ dataSet, setName, defaultValues, legendText, isRadio, suffix }) {
  return (
    <fieldset className={isRadio ? classes.radioButtons : classes.checkboxButtons}>
      <legend className={classes.buttonHeader}>{legendText}</legend>

      {dataSet.map((data) => {
        let defValue = isRadio
          ? defaultValues && defaultValues === data
          : defaultValues && defaultValues.findIndex((value) => value === data) >= 0;

        const id = `${setName}_${data}`;

        const box = isRadio ? (
          <StyledRadio
            key={id}
            id={id}
            setName={setName}
            data={data}
            value={data}
            defaultChecked={defValue}
            suffix={suffix}
          />
        ) : (
          <StyledCheckbox
            key={id}
            id={id}
            setName={setName}
            data={data}
            value={data}
            defaultChecked={defValue}
            suffix={suffix}
          />
        );

        return box;
      })}
    </fieldset>
  );
}

export default CheckboxSet;
