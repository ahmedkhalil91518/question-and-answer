import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";

function SignupContainer() {
  const licenseCheckbox = [
    { key: "", value: "agreeLicense" },
  ];
  const notificationsCheckbox = [
    { key: "", value: "sendNotifications" },
  ];
  const initialValues = {
    email: "",
    description: "",
    selectOption: "",
    radioOption: "",
    checkboxOption: [],
    birthDate: null,
  };
  const validationSchema = Yup.object({
    email: Yup.string().required("Required"),
    description: Yup.string().required("Required"),
    selectOption: Yup.string().required("Required"),
    radioOption: Yup.string().required("Required"),
    checkboxOption: Yup.array().required("Required"),
    birthDate: Yup.date().required("Required").nullable(),
    password: Yup.string().required("Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), ""], "Passwords must match")
      .required("Required"),
  });
  const onSubmit = (values) => {
    console.log("Form data", values);
    console.log("Saved data", JSON.parse(JSON.stringify(values)));
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form>
          <FormikControl control="input" type="text" label="Name" name="name" />
          <FormikControl
            control="date"
            label="Date of Birth"
            name="birthDate"
          />
          <FormikControl
            control="input"
            type="email"
            label="Email"
            name="email"
          />
          <FormikControl
            control="input"
            type="password"
            label="Password"
            name="password"
          />
          <FormikControl
            control="input"
            type="password"
            label="Confirm Password"
            name="confirmPassword"
          />
                    <FormikControl
            control='checkbox'
            label='I accept the license tern agreement'
            name='checkboxOption'
            options={licenseCheckbox}
          />
                    <FormikControl
            control='checkbox'
            label='send me notifications about new tests'
            name='checkboxOption'
            options={notificationsCheckbox}
          />
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
}

export default SignupContainer;
