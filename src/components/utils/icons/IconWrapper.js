import classes from "./IconWrapper.module.css";
import { SlLink, SlArrowRight, SlArrowDown } from "react-icons/sl";
import { CenteredRow, CenteredColumn } from "../layouts/CenteringContainer";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaBluesky } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { MdLightMode, MdDarkMode } from "react-icons/md";
const iconPairs = [
  { id: "link", icon: SlLink },
  { id: "arrow-right", icon: SlArrowRight },
  { id: "arrow-down", icon: SlArrowDown },
  { id: "github", icon: FaGithub },
  { id: "email", icon: MdEmail },
  { id: "linkedIn", icon: FaLinkedin },
  { id: "bluesky", icon: FaBluesky },
  { id: "lightmode", icon: MdLightMode },
  { id: "darkmode", icon: MdDarkMode },
];

function IconWrapper({ iconID, isDarkMode, size = "1rem" }) {
  const iconindex = iconPairs.findIndex((icon) => icon.id === iconID);
  const iconPair = iconPairs[iconindex];

  let iconClassName = `${classes.icon} ${isDarkMode ? classes.dark : ""}`;

  switch (iconID) {
    case "bluesky":
      iconClassName = iconClassName.concat(` ${classes.bluesky}`);
      break;
    case "github":
      iconClassName = iconClassName.concat(` ${classes.github}`);
      break;
    case "linkedIn":
      iconClassName = iconClassName.concat(` ${classes.linkedIn}`);
      break;
    case "email":
      iconClassName = iconClassName.concat(` ${classes.email}`);
      break;
    default:
      iconClassName = iconClassName = `${classes.icon}`;
      break;
  }

  //On safari svg's dont take sizes in rem
  let adjustedSize = size;
  if (size.includes("rem")) {
    adjustedSize =
      parseFloat(size) *
      parseFloat(getComputedStyle(document.documentElement).fontSize);
  }

  return (
    <div className={classes.iconWrapper}>
      <CenteredColumn className={classes.iconBackground}>
        <CenteredRow>
          {iconPair && (
            <iconPair.icon className={iconClassName} size={adjustedSize} />
          )}
        </CenteredRow>
      </CenteredColumn>
    </div>
  );
}

export default IconWrapper;
