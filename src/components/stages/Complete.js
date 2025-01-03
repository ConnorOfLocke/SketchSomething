function Complete({ onStepDone }) {
  function onHomeButton() {
    onStepDone();
  }

  return (
    <>
      <h2>Alllll done!</h2>
      <button onClick={onHomeButton}>Home</button>
    </>
  );
}

export default Complete;
