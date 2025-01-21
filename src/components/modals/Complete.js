import classes from "./Complete.module.css";
import Modal from "./Modal";

function CompleteModal({ steps, open, onConfirm }) {
  return (
    <Modal
      open={open}
      className={classes.complete}
      onConfirm={onConfirm}
      confirmText={"Alright!"}
    >
      <div className={classes.completeBorder}>
        <div className={classes.innerBorder}>
          <h1>SESSION COMPLETE</h1>
          <h2>Sketches made: </h2>
          <ul type="none">
            {steps &&
              steps.map((step) => {
                if (step.type === "promptSet") {
                  return (
                    <li
                      key={`${step.subject}_${step.promptSetIndex}`}
                    >{`${step.prompts} ${step.subject}`}</li>
                  );
                }
                return null;
              })}
          </ul>
        </div>
      </div>
    </Modal>
  );
}

export default CompleteModal;
