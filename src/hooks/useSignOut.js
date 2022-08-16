import { Alert } from "react-native";

import { useApolloClient } from "@apollo/client";
import { useNavigate } from "react-router-native";

import useAuthStorage from "../hooks/useAuthStorage";

const useSignOut = () => {
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();
  const navigate = useNavigate();

  const signOut = async () => {
    await authStorage.removeAccessToken();
    await apolloClient.resetStore();
    Alert.alert("Signed out successfully!");
    navigate("/");
  };
  return [signOut];
};

export default useSignOut;
