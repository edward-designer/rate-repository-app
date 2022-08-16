import { useMutation, useApolloClient } from "@apollo/client";
import { useNavigate } from "react-router-native";

import useAuthStorage from "../hooks/useAuthStorage";

import { AUTHENTICATE } from "../graphql/mutations";

const useSignIn = () => {
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();
  const navigate = useNavigate();

  const [mutateFn, result] = useMutation(AUTHENTICATE);
  const signIn = async ({ username, password }) => {
    const { data } = await mutateFn({
      variables: { credentials: { username, password } },
    });
    await authStorage.setAccessToken(data.authenticate.accessToken);
    apolloClient.resetStore();
    navigate("/");
  };
  return [signIn, result];
};

export default useSignIn;
