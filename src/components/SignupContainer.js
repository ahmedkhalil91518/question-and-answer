import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";

function SignupContainer() {
  const licenseCheckbox = [{ key: "I accept the license terms agreement", value: "agreeLicense" }];
  const notificationsCheckbox = [
    { key: "send me notifications about new tests", value: "sendNotifications" },
  ];
  const initialValues = {
    name: "",
    birthDate: null,
    email: "",
    password: "",
    confirmPassword: "",
    licenseCheckbox: [],
    notificationsCheckbox: [],
  };
  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    birthDate: Yup.date().required("Required").nullable(),
    email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string().required("Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), ""], "Passwords must match")
      .required("Required"),
    licenseCheckbox: Yup.array().min(1, 'Required')
  });
  const onSubmit = (values) => {
    console.log("Form data", values);
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
            control="checkbox"
            label=""
            name="licenseCheckbox"
            options={licenseCheckbox}
          />
          <FormikControl
            control="checkbox"
            label=""
            name="notificationsCheckbox"
            options={notificationsCheckbox}
          />
          <button type="submit" disabled={!(formik.isValid && formik.dirty)}>
            Signup
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default SignupContainer;
