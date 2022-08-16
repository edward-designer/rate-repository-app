import { Formik } from "formik";
import * as yup from "yup";

import SignInForm from "./SignInForm";

import useSignIn from "../hooks/useSignIn";

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(5, "Username must be greater or equal to 8 characters")
    .required("Username is required"),
  password: yup
    .string()
    .min(8, "Password must be greater or equal to 8 characters")
    .required("Password is required"),
});

const SignIn = () => {
  const [signIn] = useSignIn();
  const onSubmit = async (values) => {
    const { username, password } = values;
    try {
      await signIn({ username, password });
    } catch (e) {
      console.log(e);
    }
  };
  const initialValues = {
    username: "",
    password: "",
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;
