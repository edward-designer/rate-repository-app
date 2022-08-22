import SignInForm from "./SignInForm";
import { Formik } from "formik";
import { render, fireEvent, waitFor } from "@testing-library/react-native";

describe("SignIn", () => {
  describe("SignInContainer", () => {
    it("calls onSubmit function with correct arguments when a valid form is submitted", async () => {
      const onSubmit = jest.fn();
      const { getByPlaceholderText, getByText } = render(
        <Formik
          initialValues={{ username: "", password: "" }}
          onSubmit={onSubmit}
        >
          {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
        </Formik>
      );

      fireEvent.changeText(getByPlaceholderText("Username"), "kalle");
      fireEvent.changeText(getByPlaceholderText("Password"), "password");
      fireEvent.press(getByText("Sign In"));

      await waitFor(() => {
        expect(onSubmit).toHaveBeenCalledTimes(1);

        expect(onSubmit.mock.calls[0][0]).toEqual({
          username: "kalle",
          password: "password",
        });
      });
    });
  });
});
