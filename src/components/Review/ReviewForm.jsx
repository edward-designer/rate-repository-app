import {
  KeyboardAvoidingView,
  ScrollView,
  Pressable,
  StyleSheet,
  Platform,
} from "react-native";

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
  multilineField: {
    padding: 20,
    paddingTop: 20,
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

const ReviewForm = ({ onSubmit }) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView>
        <FormikTextInput
          name="repositoryName"
          placeholder="Repository Name"
          style={[styles.field, { marginTop: 45 }]}
        />
        <FormikTextInput
          name="ownerName"
          placeholder="Owner Name"
          style={styles.field}
        />
        <FormikTextInput
          name="rating"
          placeholder="Rating between 0 and 100"
          style={styles.field}
        />
        <FormikTextInput
          name="text"
          placeholder="Reivew"
          multiline
          style={styles.multilineField}
        />
        <Pressable onPress={onSubmit} style={styles.button}>
          <NativeText
            fontSize="subheading"
            fontWeight="bold"
            style={styles.buttonText}
          >
            Add Review
          </NativeText>
        </Pressable>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default ReviewForm;
