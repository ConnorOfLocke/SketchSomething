import classes from "./About.module.css";
import { useEffect, useRef } from "react";
import { LinkButton, StyledButton } from "../components/utils/button";
import { ContentBox } from "../components/utils/layouts";
import { IconWrapper } from "../components/utils/icons";
import SOCIALS from "../data/socials.js";

function AboutModal({ open, onClose }) {
  const modalRef = useRef();

  useEffect(() => {
    if (open) {
      modalRef.current.showModal();
    } else {
      modalRef.current.close();
    }
  }, [open]);

  return (
    <dialog className={classes.about} ref={modalRef} onClose={onClose}>
      <ContentBox>
        <h1>Thanks for checking this out!</h1>
        <h3>"Sketch Something" was made by:</h3>
        <h3>
          Connor "<span>Spiggleedoo</span>" Locke-Warburton
        </h3>
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
              <IconWrapper iconID={social.id} size={"3rem"} />
            </LinkButton>
          ))}
        </nav>
        <div>
          <StyledButton onClick={onClose} autoFocus>
            Close
          </StyledButton>
        </div>
      </ContentBox>
    </dialog>
  );
}

export default AboutModal;
