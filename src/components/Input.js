import { Fragment } from "react";

function Input(props) {
  const inputClasses = props.hasError ? "form-control invalid" : "form-control";

  return (
    <Fragment>
      <div className={inputClasses}>
        <label htmlFor={props.id}>{props.title}</label>
        <input
          type={props.type}
          id={props.id}
          value={props.value}
          onBlur={props.onBlur}
          onChange={(e) => props.onChange(e.target.value)}
        />
        {props.hasError && <p className="error-text">{props.errorText}</p>}
      </div>
    </Fragment>
  );
}

export default Input;
