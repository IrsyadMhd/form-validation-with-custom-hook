import { Fragment, useEffect, useState } from "react";

function Input(props) {
  const [inputValue, setInputValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  useEffect(() => {
    if (props.confirm === 1) {
      setInputValue("");
      setIsTouched(false);
    }
  }, [props.confirm]);

  const valueIsValid =
    props.id === "email" ? inputValue.includes("@") : inputValue.trim() !== "";

  const inputIsInvalid = !valueIsValid && isTouched;

  const onChangeHandler = (e) => {
    setInputValue(e.target.value);
    props.onUpdate(e.target.value, props.id);
  };

  const onBlurHandler = () => {
    setIsTouched(true);
  };

  const inputClasses = inputIsInvalid ? "form-control invalid" : "form-control";

  return (
    <Fragment>
      <div className={inputClasses}>
        <label htmlFor={props.id}>{props.title}</label>
        <input
          type={props.type}
          id={props.id}
          value={inputValue}
          onBlur={onBlurHandler}
          onChange={onChangeHandler}
        />
        {(inputIsInvalid || !props.confirm) && (
          <p className="error-text">{props.errorText}</p>
        )}
      </div>
    </Fragment>
  );
}

export default Input;
