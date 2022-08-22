import { View, Pressable, StyleSheet } from "react-native";

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

const SignInForm = ({ onSubmit }) => {
  return (
    <View>
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
      <Pressable onPress={onSubmit} style={styles.button}>
        <NativeText
          fontSize="subheading"
          fontWeight="bold"
          style={styles.buttonText}
        >
          Sign In
        </NativeText>
      </Pressable>
    </View>
  );
};

export default SignInForm;
