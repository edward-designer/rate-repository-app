import { View, FlatList, StyleSheet, ScrollView } from "react-native";
import Constants from "expo-constants";

import AppBarTab from "./AppBarTab";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.barBackground,
  },
  tabs: {
    display: "flex",
    flexBasis: 80,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-end",
  },
});

const tabs = ["Repositories", "SignIn"];

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <FlatList
          contentContainerStyle={styles.tabs}
          data={tabs}
          renderItem={({ item }) => <AppBarTab tab={item} />}
          keyExtractor={(item) => item}
        />
      </ScrollView>
    </View>
  );
};

export default AppBar;
