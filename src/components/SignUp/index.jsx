import { Formik } from "formik";
import * as yup from "yup";

import SignUpForm from "./SignUpForm";

import useSignUp from "../../hooks/useSignUp";

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(1, "Username must be greater or equal to 8 characters")
    .required("Username is required"),
  password: yup
    .string()
    .min(5, "Password must be greater or equal to 5 characters")
    .max(50, "Password must be less or equal to 50 characters")
    .required("Password is required"),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

const SignUp = () => {
  const [signUp] = useSignUp();
  const onSubmit = async (values, { setSubmitting, setFieldError }) => {
    const { username, password } = values;
    try {
      await signUp({ username, password });
    } catch (e) {
      setFieldError("username", e.message);
    } finally {
      setSubmitting(false);
    }
  };
  const initialValues = {
    username: "",
    password: "",
    passwordConfirmation: "",
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <SignUpForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignUp;
