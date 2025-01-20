//import { useSelector } from "react-redux";
import classes from "./ConfirmSettings.module.css";
import Modal from "./Modal";

function ConfirmSettingsModal({ ...props }) {
  //const sessionSettings = useSelector((state) => state.sessionSettings);

  return (
    <Modal
      {...props}
      confirmText={"Let's Go!"}
      cancelText={"Back"}
      className={classes.confirmSettingsModal}
    >
      <h1>You'll be drawing:</h1>
      <ul>
        <li>Lots of stuff</li>
      </ul>
    </Modal>
  );
}

export default ConfirmSettingsModal;
