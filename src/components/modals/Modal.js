import classes from "./Modal.module.css";
import { useEffect, useRef } from "react";
import { ContentBox } from "../utils/layouts";
import { StyledButton } from "../utils/button";
import { createPortal } from "react-dom";
import { uiStateActions } from "../../store/ui-state-slice";
import { useDispatch } from "react-redux";

function Modal({ open, onConfirm, onCancel, confirmText, cancelText, children, className, props }) {
  const modalRef = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    if (open) {
      modalRef.current.showModal();
      dispatch(uiStateActions.setModalState(true));
    } else {
      modalRef.current.close();
      dispatch(uiStateActions.setModalState(false));
    }
  }, [open, dispatch]);

  return createPortal(
    <dialog
      ref={modalRef}
      onClose={onConfirm}
      className={`${classes.modal} ${className}`}
      {...props}
    >
      <ContentBox>
        {children}
        <div>
          <StyledButton onClick={onConfirm} autoFocus>
            {confirmText ? confirmText : "Close"}
          </StyledButton>
          {onCancel && (
            <StyledButton onClick={onCancel} buttonType="secondary" autoFocus>
              {cancelText ? cancelText : "Close"}
            </StyledButton>
          )}
        </div>
      </ContentBox>
    </dialog>,
    document.getElementById("modal")
  );
}

export default Modal;
