import { useSelector } from "react-redux";
import classes from "./ConfirmSettings.module.css";
import Modal from "./Modal";
import pluralize from "pluralize";

function ConfirmSettingsModal({ ...props }) {
  const sessionSettings = useSelector((state) => state.sessionSettings);

  return (
    <Modal
      {...props}
      confirmText={"Let's Go!"}
      cancelText={"Back"}
      className={classes.confirmSettingsModal}
    >
      <h1>You'll be drawing:</h1>
      <ul>
        {sessionSettings.stretches && <li>Hand Stretches</li>}
        {sessionSettings.sets.map((set, setIndex) => (
          <li key={setIndex}>{`${set.prompts} ${set.subject} in ${pluralize(
            "Min",
            set.time,
            true
          )} `}</li>
        ))}
      </ul>
    </Modal>
  );
}

export default ConfirmSettingsModal;
