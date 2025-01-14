import classes from "./Todo.module.css";
import Modal from "./Modal";
import { TODO } from "../../TODO.js";

function ToDoModal({ open, onConfirm }) {
  return (
    <Modal open={open} onConfirm={onConfirm} className={classes.todoModal}>
      <h1>There's more to come!</h1>
      <ul>
        {TODO.map((todoItem) => (
          <li key={todoItem}>{todoItem}</li>
        ))}
      </ul>
    </Modal>
  );
}

export default ToDoModal;
