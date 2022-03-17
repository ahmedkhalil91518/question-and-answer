import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";
import { FormControl } from "react-bootstrap";

function Input(props) {
  const { label, name, error, touched, ...rest } = props;
  console.log(props);
  return (
    <div className="my-4">
      <label htmlFor={name}>{label}</label>
      <Field
        as={FormControl}
        id={name}
        name={name}
        isInvalid={error && touched}
        {...rest}
      />
      <ErrorMessage component={TextError} name={name} />
    </div>
  );
}

export default Input;
