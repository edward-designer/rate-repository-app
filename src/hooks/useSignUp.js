import { Alert } from "react-native";
import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-native";

import { SIGNUP } from "../graphql/mutations";

const useSignUp = () => {
  const navigate = useNavigate();

  const [mutateFn, result] = useMutation(SIGNUP);
  const signUp = async ({ username, password }) => {
    const { data } = await mutateFn({
      variables: { user: { username, password } },
    });
    Alert.alert(
      `User ${data.createUser.username} has been created. Please sign in now.`
    );
    navigate("/SignIn");
  };
  return [signUp, result];
};

export default useSignUp;
