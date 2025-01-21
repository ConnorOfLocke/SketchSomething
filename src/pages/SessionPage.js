import { useNavigate } from "react-router";
import { StyledButton } from "../components/utils/button";
import Session from "../components/Session";
import { ContentBox } from "../components/utils/layouts";
import { useState } from "react";
import Modal from "../components/modals/Modal";

function SessionPage() {
  const navigate = useNavigate();
  const [resetModalOpen, setResetModalOpen] = useState(false);

  function onCloseResetModal() {
    setResetModalOpen(false);
  }

  function goHome() {
    navigate("/");
  }

  function onResetClicked() {
    setResetModalOpen(true);
  }

  return (
    <>
      <Session onSessionDone={goHome} />
      <ContentBox fadeIn>
        <StyledButton buttonType="secondary" onClick={onResetClicked}>
          Reset
        </StyledButton>
      </ContentBox>
      <Modal
        open={resetModalOpen}
        onConfirm={onCloseResetModal}
        onCancel={goHome}
        confirmText={"Keep Going"}
        cancelText={"Get Outta Here"}
      >
        <h1>Are you sure?</h1>
        <h2> You will lose your current session?</h2>
      </Modal>
    </>
  );
}

export default SessionPage;
