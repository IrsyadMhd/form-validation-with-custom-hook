import { useState } from "react";
import Input from "./Input";

const SimpleInput = (props) => {
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("initialState");
  const [confirm, setConfirm] = useState(true);

  let formIsValid = false;

  if (nameInput.trim() !== "" && emailInput.includes("@")) {
    formIsValid = true;
  }

  const onUpdateValue = (val, id) => {
    id === "email" ? setEmailInput(val) : setNameInput(val);
    setConfirm(true);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (!formIsValid) {
      setConfirm(false);
      return;
    }
    setConfirm(1);
    setEmailInput("");
    setNameInput("");
    console.log(nameInput, emailInput);
  };

  return (
    <form onSubmit={submitHandler}>
      <Input
        title="Your Name"
        type="text"
        id="name"
        onUpdate={onUpdateValue}
        confirm={confirm}
        errorText="Nama harus diisi"
      />
      <Input
        title="Your E-Mail"
        type="email"
        id="email"
        onUpdate={onUpdateValue}
        confirm={confirm}
        errorText="Isikan email yang valid"
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
