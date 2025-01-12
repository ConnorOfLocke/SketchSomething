import classes from "./About.module.css";
import { LinkButton } from "../utils/button/index.js";
import { IconWrapper } from "../utils/icons/index.js";
import SOCIALS from "../../data/socials.js";
import Modal from "./Modal.js";

function AboutModal({ open, onConfirm }) {
  return (
    <Modal open={open} onConfirm={onConfirm} className={classes.about}>
      <h1>Thanks for checking this out!</h1>
      <h3>"Sketch Something" was made by:</h3>
      <h3>
        Connor "<span>Spiggleedoo</span>" Locke-Warburton
      </h3>
      <p>This site is still work in progress so lemme know if anything breaks for you</p>
      <h3>Come say hi!</h3>
      <nav>
        {SOCIALS.map((social) => (
          <LinkButton
            key={social.id}
            className={classes.linkbutton}
            urlLink={social.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconWrapper iconID={social.id} size={"2.5rem"} />
          </LinkButton>
        ))}
      </nav>
    </Modal>
  );
}

export default AboutModal;
