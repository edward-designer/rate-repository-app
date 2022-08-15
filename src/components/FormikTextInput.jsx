import { StyleSheet } from "react-native";
import { useField } from "formik";

import TextInput from "./TextInput";
import NativeText from "./NativeText";

import theme from "../theme";

const styles = StyleSheet.create({
  errorText: {
    marginTop: -5,
    marginLeft: 15,
    color: theme.colors.error,
  },
  errorField: {
    borderColor: theme.colors.error,
  },
});

const FormikTextInput = ({ name, style, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;

  return (
    <>
      <TextInput
        onChangeText={(value) => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        {...props}
        style={[style, showError && styles.errorField]}
      />
      {showError && (
        <NativeText style={styles.errorText}>{meta.error}</NativeText>
      )}
    </>
  );
};

export default FormikTextInput;
