import { useCallback, useEffect, useState } from "react";
import Prompt from "./Prompt";

function PromptSet({
  time,
  promptsPerSet,
  encouraging,
  subject,
  promptSetIndex,
  setQuantity,
  onStepDone,
}) {
  const [promptIndex, setPromptIndex] = useState(null);
  const [promptCount, setPromptCount] = useState(0);

  //get the full subject with all the prompts
  const refreshPromptIndex = useCallback(() => {
    const newIndex = Math.floor(Math.random() * subject.prompts.length);
    setPromptIndex(newIndex);
  }, [subject]);

  function onPromptDone() {
    if (promptCount + 1 >= promptsPerSet) {
      onStepDone();
      setPromptCount(0);
    } else {
      setPromptCount((prev) => prev + 1);
      refreshPromptIndex();
    }
  }

  useEffect(() => {
    refreshPromptIndex();
  }, [subject, refreshPromptIndex]);

  const timePerPrompt = time / promptsPerSet;

  return (
    <Prompt prompt={subject.prompts[promptIndex]} time={timePerPrompt} onStepDone={onPromptDone}>
      <h2>
        Set {1 + promptSetIndex} of {setQuantity}
      </h2>
      <h2>
        Drawing {subject.name} ({promptCount + 1} / {promptsPerSet})
      </h2>
    </Prompt>
  );
}

export default PromptSet;
