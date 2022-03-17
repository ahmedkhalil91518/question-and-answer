import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";
import { Button } from "react-bootstrap";

function Signup() {
  const licenseCheckbox = [
    { key: "I accept the license terms agreement", value: "agreeLicense" },
  ];
  const notificationsCheckbox = [
    {
      key: "send me notifications about new tests",
      value: "sendNotifications",
    },
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
    licenseCheckbox: Yup.array().min(1, "Required"),
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
        <div className="d-flex flex-row my-5">
          <img src="./18915856.jpg" alt="" className="signup-img"/>
          <Form className="form-container">
          <h1 className=" signup-h1">Signup</h1>
            <FormikControl
              control="input"
              type="text"
              label="Name"
              name="name"
              error={formik.errors.name}
              touched={formik.touched.name}
            />
            <FormikControl
              control="date"
              label="Date of Birth"
              name="birthDate"
              error={formik.errors.birthDate}
              touched={formik.touched.birthDate}
            />
            <FormikControl
              control="input"
              type="email"
              label="Email"
              name="email"
              error={formik.errors.email}
              touched={formik.touched.email}
            />
            <FormikControl
              control="input"
              type="password"
              label="Password"
              name="password"
              error={formik.errors.password}
              touched={formik.touched.password}
            />
            <FormikControl
              control="input"
              type="password"
              label="Confirm Password"
              name="confirmPassword"
              error={formik.errors.confirmPassword}
              touched={formik.touched.confirmPassword}
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
            <Button
              type="submit"
              disabled={!(formik.isValid && formik.dirty)}
              variant="primary"
            >
              Signup
            </Button>{" "}
          </Form>
        </div>
      )}
    </Formik>
  );
}

export default Signup;
