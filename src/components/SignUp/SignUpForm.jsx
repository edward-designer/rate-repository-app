import { Pressable, StyleSheet, ScrollView } from "react-native";

import theme from "../../theme";

import NativeText from "../NativeText";
import FormikTextInput from "../FormikTextInput";

const styles = StyleSheet.create({
  field: {
    padding: 20,
    borderWidth: 1,
    borderColor: theme.colors.border,
    margin: 15,
    marginTop: 10,
    borderRadius: 10,
  },
  button: {
    backgroundColor: theme.colors.primary,
    margin: 15,
    borderRadius: 10,
  },
  buttonText: {
    textAlign: "center",
    color: "#fff",
    padding: 15,
  },
});

const SignUpForm = ({ onSubmit }) => {
  return (
    <ScrollView>
      <FormikTextInput
        name="username"
        placeholder="Username"
        style={[styles.field, { marginTop: 45 }]}
      />
      <FormikTextInput
        name="password"
        placeholder="Password"
        secureTextEntry
        style={styles.field}
      />
      <FormikTextInput
        name="passwordConfirmation"
        placeholder="Password Confirmation"
        secureTextEntry
        style={styles.field}
      />
      <Pressable onPress={onSubmit} style={styles.button}>
        <NativeText
          fontSize="subheading"
          fontWeight="bold"
          style={styles.buttonText}
        >
          Sign Up
        </NativeText>
      </Pressable>
    </ScrollView>
  );
};

export default SignUpForm;
