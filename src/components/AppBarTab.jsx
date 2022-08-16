import { Pressable, StyleSheet } from "react-native";
import { Link } from "react-router-native";
import NativeText from "./NativeText";

import useSignOut from "../hooks/useSignOut";

const styles = StyleSheet.create({
  tab: {
    padding: 10,
  },
});

const AppBarTab = ({ tab }) => {
  const [signOut] = useSignOut();
  if (tab === "SignOut") {
    return (
      <Pressable style={styles.tab} onPress={signOut}>
        <NativeText color="textReverse" fontWeight="bold">
          {tab}
        </NativeText>
      </Pressable>
    );
  }
  return (
    <Pressable style={styles.tab}>
      <Link to={tab}>
        <NativeText color="textReverse" fontWeight="bold">
          {tab}
        </NativeText>
      </Link>
    </Pressable>
  );
};

export default AppBarTab;
