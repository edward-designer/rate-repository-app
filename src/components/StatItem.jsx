import { View, StyleSheet } from "react-native";

import NativeText from "./NativeText";

const styles = StyleSheet.create({
  statItem: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 10,
  },
});

const StatItem = ({ count, type }) => {
  return (
    <View style={styles.statItem}>
      <NativeText fontSize="subheading" fontWeight="bold">
        {count}
      </NativeText>
      <NativeText>{type}</NativeText>
    </View>
  );
};

export default StatItem;
