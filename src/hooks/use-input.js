import { useState } from "react";

function useInput(validate) {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const enteredValueIsValid = validate(enteredValue);
  const hasError = !enteredValueIsValid && isTouched;

  const onValueChangedHandler = (value) => {
    setEnteredValue(value);
  };

  const onInputBlurHandler = () => {
    setIsTouched(true);
  };

  const reset = (val) => {
    setEnteredValue(val);
    setIsTouched(false);
  };
  return {
    value: enteredValue,
    isValid: enteredValueIsValid,
    hasError,
    valueChanged: onValueChangedHandler,
    inputBlur: onInputBlurHandler,
    reset,
  };
}

export default useInput;
