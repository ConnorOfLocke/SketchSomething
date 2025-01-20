import SmallBorderBox from "../layouts/SmallBorderBox";
import classes from "./CheckboxSet.module.css";
import StyledCheckbox from "./StyledCheckbox";
import StyledRadio from "./StyledRadio";

function CheckboxSet({
  dataSet,
  setName,
  defaultValues,
  legendText,
  isRadio,
  displayAsRow = true,
  suffix,
  children,
  onClick,
}) {
  function onCheckChange(event) {
    onClick && onClick(event.target.value);
  }

  return (
    <SmallBorderBox
      titleText={legendText}
      className={displayAsRow ? classes.row : classes.column}
    >
      {dataSet.map((data) => {
        let defValue = isRadio
          ? defaultValues && defaultValues === data
          : defaultValues &&
            defaultValues.findIndex((value) => value === data) >= 0;

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
            onClick={onCheckChange}
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
            onClick={onCheckChange}
          />
        );

        return box;
      })}
      {children}
    </SmallBorderBox>
  );
}

export default CheckboxSet;
