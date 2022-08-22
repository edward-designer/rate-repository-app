import { View, StyleSheet, ScrollView } from "react-native";

import Constants from "expo-constants";
import theme from "../../theme";

import useGetMe from "../../hooks/useGetMe";

import AppBarTab from "./AppBarTab";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.barBackground,
    height: 120,
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-end",
    flexDirection: "row",
  },
});

const AppBar = () => {
  const { isLoggedIn } = useGetMe();
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab tab="Repositories" />
        {isLoggedIn ? (
          <>
            <AppBarTab tab="AddReview" />
            <AppBarTab tab="MyReviews" />
            <AppBarTab tab="SignOut" />
          </>
        ) : (
          <>
            <AppBarTab tab="SignIn" />
            <AppBarTab tab="SignUp" />
          </>
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;
