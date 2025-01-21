import { useSelector } from "react-redux";
import classes from "./ConfirmSettings.module.css";
import Modal from "./Modal";
import pluralize from "pluralize";
import { WRIST_EXERCISES } from "../../data/exercises";

function ConfirmSettingsModal({ ...props }) {
  const sessionSettings = useSelector((state) => state.sessionSettings);

  function GetExerciseTime() {
    return WRIST_EXERCISES.reduce((total, cur) => total + cur.time, 0);
  }

  function getFullSessionTime() {
    //in seconds
    let time = 0;

    if (sessionSettings.stretches) {
      time += GetExerciseTime();
    }

    time += sessionSettings.sets.reduce(
      (total, cur) => total + cur.time * 60,
      0
    );

    return time;
  }

  return (
    <Modal
      {...props}
      confirmText={"Let's Go!"}
      cancelText={"Back"}
      className={classes.confirmSettingsModal}
    >
      <h1>You'll be drawing:</h1>
      <ul type="none">
        {sessionSettings.stretches && (
          <li>
            <span className={classes.col1}>
              <h3>Hand Stretches</h3>
            </span>
            <span className={`${classes.col2} ${classes.accent}`}>
              <h3>{`${pluralize(
                "Min",
                Math.floor(GetExerciseTime() / 60),
                true
              )}`}</h3>
            </span>
          </li>
        )}
        {sessionSettings.sets.map((set, setIndex) => (
          <li key={setIndex}>
            <span className={classes.col1}>
              <h3>{`${set.prompts} ${set.subject}`}</h3>
            </span>
            <span className={classes.col2}>
              <h3>{`${pluralize("Min", set.time, true)}`}</h3>
            </span>
          </li>
        ))}
      </ul>
      <h3>
        Total Draw Time:{" "}
        {`${pluralize("Min", Math.floor(getFullSessionTime() / 60), true)}`}
      </h3>
    </Modal>
  );
}

export default ConfirmSettingsModal;
