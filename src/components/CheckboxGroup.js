import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";
import { FormControl } from "react-bootstrap";
function CheckboxGroup(props) {
  const { label, name, options, ...rest } = props;
  return (
    <div className="my-4">
      <label>{label}</label>
      <Field name={name} as={FormControl}>
        {({ field }) => {
          return options.map((option) => {
            return (
              <React.Fragment key={option.key}>
                <input
                  type="checkbox"
                  id={option.value}
                  {...field}
                  {...rest}
                  value={option.value}
                  checked={field.value.includes(option.value)}
                  className="m-2"
                />
                <label htmlFor={option.value}>{option.key}</label>
              </React.Fragment>
            );
          });
        }}
      </Field>
      <ErrorMessage component={TextError} name={name} />
    </div>
  );
}

export default CheckboxGroup;
