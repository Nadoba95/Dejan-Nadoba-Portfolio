import { useRef, useState } from "react";

function useInput(validateValue) {
  const [enteredValue, setEnteredValue] = useState("");
  const [enteredValueIsValid, setEnteredValueIsValid] = useState(true);
  const valueRef = useRef();

  const checkValueIsValid = validateValue(enteredValue);

  function valueChangeHandler(e) {
    setEnteredValue(e.target.value);
  }

  function reset() {
    setEnteredValue("");
  }

  return {
    value: enteredValue,
    valueIsValid: enteredValueIsValid,
    checkValueIsValid,
    setEnteredValueIsValid,
    valueChangeHandler,
    reset,
    valueRef,
  };
}

export default useInput;
