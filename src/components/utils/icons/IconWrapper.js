import classes from "./IconWrapper.module.css";
import { SlLink, SlArrowRight, SlArrowDown } from "react-icons/sl";
import { CenteredRow, CenteredColumn } from "../layouts/CenteringContainer";

const iconPairs = [
  { id: "link", icon: SlLink },
  { id: "arrow-right", icon: SlArrowRight },
  { id: "arrow-down", icon: SlArrowDown },
];

function IconWrapper({ iconID, size }) {
  const iconindex = iconPairs.findIndex((icon) => icon.id === iconID);
  const iconPair = iconPairs[iconindex];

  return (
    <div className={classes.iconWrapper}>
      <CenteredColumn>
        <CenteredRow>
          <iconPair.icon size={size} />
        </CenteredRow>
      </CenteredColumn>
    </div>
  );
}

export default IconWrapper;
