import classes from "./IconWrapper.module.css";
import { SlLink, SlArrowRight, SlArrowDown } from "react-icons/sl";
import { CenteredRow, CenteredColumn } from "../layouts/CenteringContainer";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaBluesky } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const iconPairs = [
  { id: "link", icon: SlLink },
  { id: "arrow-right", icon: SlArrowRight },
  { id: "arrow-down", icon: SlArrowDown },
  { id: "github", icon: FaGithub },
  { id: "email", icon: MdEmail },
  { id: "linkedIn", icon: FaLinkedin },
  { id: "bluesky", icon: FaBluesky },
];

function IconWrapper({ iconID, size }) {
  const iconindex = iconPairs.findIndex((icon) => icon.id === iconID);
  const iconPair = iconPairs[iconindex];

  let iconClassName = "";

  switch (iconID) {
    case "bluesky":
      iconClassName = `${classes.icon} ${classes.bluesky}`;
      break;
    case "github":
      iconClassName = `${classes.icon} ${classes.github}`;
      break;
    case "linkedIn":
      iconClassName = `${classes.icon} ${classes.linkedIn}`;
      break;
    case "email":
    default:
      iconClassName = `${classes.icon} ${classes.email}`;
      break;
  }

  //On safari svg's dont take sizes in rem
  let adjustedSize = size;
  if (size.includes("rem")){
    adjustedSize = parseFloat(size) * parseFloat(getComputedStyle(document.documentElement).fontSize);
  }

  return (
    <div className={classes.iconWrapper}>
      <CenteredColumn className={classes.iconBackground}>
        <CenteredRow>
          {iconPair && <iconPair.icon className={iconClassName} size={adjustedSize} />}
        </CenteredRow>
      </CenteredColumn>
    </div>
  );
}

export default IconWrapper;
