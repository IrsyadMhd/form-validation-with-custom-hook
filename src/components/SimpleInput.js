import useInput from "../hooks/use-input";
import Input from "./Input";

const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid: nameInputIsValid,
    hasError: nameInputHasError,
    valueChanged: onInputNameChangeHandler,
    inputBlur: onInputNameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: emailInputIsValid,
    hasError: emailInputHasError,
    valueChanged: onInputEmailChangeHandler,
    inputBlur: onInputEmailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes("@"));

  let formIsValid = false;

  if (nameInputIsValid && emailInputIsValid) {
    formIsValid = true;
  }

  const submitHandler = (e) => {
    e.preventDefault();
    if (!formIsValid) return;
    console.log(enteredName, enteredEmail);
    resetEmailInput("");
    resetNameInput("");
  };

  return (
    <form onSubmit={submitHandler}>
      <Input
        hasError={nameInputHasError}
        value={enteredName}
        title="Your Name"
        type="text"
        id="name"
        errorText="Nama harus diisi"
        onChange={onInputNameChangeHandler}
        onBlur={onInputNameBlurHandler}
      />
      <Input
        hasError={emailInputHasError}
        value={enteredEmail}
        title="Your E-Mail"
        type="text"
        id="email"
        errorText="Isikan email yang valid"
        onChange={onInputEmailChangeHandler}
        onBlur={onInputEmailBlurHandler}
      />

      <div className="form-actions">
        <button disabled={!formIsValid} type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default SimpleInput;
