import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";
import { Button } from "react-bootstrap";
import Footer from "./Footer";

function Signin() {
  const rememberMe = [{ key: "Remember me", value: "rememberMe" }];
  const initialValues = {
    email: "",
    password: "",
    rememberMe: [],
  };
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string().required("Required"),
  });
  const onSubmit = (values) => {
    console.log("Form data", values);
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => (
          <div className="d-flex flex-row my-5">
            <Form className="signin-form-container">
              <h1 className=" signup-h1">Signup</h1>
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
                control="checkbox"
                label=""
                name="rememberMe"
                options={rememberMe}
              />
              <Button
                type="submit"
                disabled={!(formik.isValid && formik.dirty)}
                variant="primary"
              >
                Signup
              </Button>{" "}
            </Form>
            <img src="./2021flat_27.png" alt="" className="signin-img" />
          </div>
        )}
      </Formik>
      <Footer
        link={
          <a
            href="https://www.freepik.com/vectors/character-back"
            style={{ color: "white" }}
          >
            Character back vector created by felicities - www.freepik.com
          </a>
        }
      />
    </div>
  );
}

export default Signin;
