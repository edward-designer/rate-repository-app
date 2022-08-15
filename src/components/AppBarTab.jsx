import { Pressable, StyleSheet } from "react-native";
import { Link } from "react-router-native";
import NativeText from "./NativeText";

const styles = StyleSheet.create({
  tab: {
    padding: 10,
  },
});

const AppBarTab = ({ tab }) => {
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
