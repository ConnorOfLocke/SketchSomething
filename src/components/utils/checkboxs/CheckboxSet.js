import classes from "./CheckboxSet.module.css";
import StyledCheckbox from "./StyledCheckbox";
import StyledRadio from "./StyledRadio";

function CheckboxSet({ dataSet, setName, defaultValues, legendText, isRadio, suffix, children }) {
  return (
    <>
      <header className={classes.buttonHeader}>
        <h3>{legendText}</h3>
      </header>
      <fieldset className={isRadio ? classes.radioButtons : classes.checkboxButtons}>
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
        {children}
      </fieldset>
    </>
  );
}

export default CheckboxSet;
