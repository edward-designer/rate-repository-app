import { View, StyleSheet } from "react-native";
import NativeText from "../NativeText";

import theme from "../../theme";

const styles = StyleSheet.create({
  reviewCard: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    paddingTop: 20,
  },
  rating: {
    margin: 10,
    marginTop: 0,
    borderWidth: 2,
    borderColor: theme.colors.primary,
    borderRadius: 30,
    width: 60,
    height: 60,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  ratingText: {
    fontSize: 18,
    paddingBottom: 0,
  },
  details: {
    flex: 1,
    paddingRight: 20,
  },
  commentName: {
    paddingBottom: 0,
  },
});

const parseDate = (date) => {
  const dateObj = new Date(date);
  return dateObj.toLocaleDateString();
};

const ReviewItem = ({ review: { node } }) => {
  // Single review item
  return (
    <View style={styles.reviewCard}>
      <View style={styles.rating}>
        <NativeText color="primary" fontWeight="bold" style={styles.ratingText}>
          {node.rating}
        </NativeText>
      </View>
      <View style={styles.details}>
        <NativeText
          fontSize="subheading"
          fontWeight="bold"
          style={styles.commentName}
        >
          {node.user.username}
        </NativeText>
        <NativeText color="textSecondary">
          {parseDate(node.createdAt)}
        </NativeText>
        <NativeText>{node.text}</NativeText>
      </View>
    </View>
  );
};

export default ReviewItem;
