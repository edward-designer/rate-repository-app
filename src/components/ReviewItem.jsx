import { View, Pressable, StyleSheet, Alert } from "react-native";
import { useNavigate } from "react-router-native";

import useDeleteReview from "../hooks/useDeleteReview";

import NativeText from "./NativeText";

import theme from "../theme";

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
  btnGroup: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    padding: 10,
  },
  commentName: {
    paddingBottom: 0,
  },
  view: {
    backgroundColor: theme.colors.primary,
    color: "#fff",
    padding: 10,
    paddingBottom: 10,
    borderRadius: 10,
    overflow: "hidden",
    flex: 1,
    margin: 5,
  },
  delete: {
    backgroundColor: "red",
    color: "#fff",
    padding: 10,
    paddingBottom: 10,
    borderRadius: 10,
    overflow: "hidden",
    flex: 1,
    margin: 5,
  },
  button: {
    fontWeight: "bold",
    textAlign: "center",
    color: "#fff",
    paddingTop: 10,
    paddingBottom: 10,
  },
});

const parseDate = (date) => {
  const dateObj = new Date(date);
  return dateObj.toLocaleDateString();
};

const ReviewItem = ({ review: { node } }) => {
  const navigate = useNavigate();
  const [deleteReview] = useDeleteReview();

  const deleteReviewHandler = (id) => {
    Alert.alert(
      "Delete review",
      "Are you sure you want to delete this review?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        { text: "Delete", onPress: () => deleteReview(id) },
      ]
    );
  };
  return (
    <>
      <View style={styles.reviewCard}>
        <View style={styles.rating}>
          <NativeText
            color="primary"
            fontWeight="bold"
            style={styles.ratingText}
          >
            {node.rating}
          </NativeText>
        </View>
        <View style={styles.details}>
          <NativeText
            fontSize="subheading"
            fontWeight="bold"
            style={styles.commentName}
          >
            {node.repository
              ? `${node.repository.ownerName}/${node.repository.name}`
              : node.user.username}
          </NativeText>
          <NativeText color="textSecondary">
            {parseDate(node.createdAt)}
          </NativeText>
          <NativeText>{node.text}</NativeText>
        </View>
      </View>
      {node.repository && (
        <View style={styles.btnGroup}>
          <Pressable
            onPress={() =>
              navigate(
                `/Repository/${node.repository.ownerName}.${node.repository.name}`
              )
            }
            style={styles.view}
          >
            <NativeText style={styles.button}>View repository</NativeText>
          </Pressable>
          <Pressable
            onPress={() => deleteReviewHandler(node.id)}
            style={styles.delete}
          >
            <NativeText style={styles.button}>Delete review</NativeText>
          </Pressable>
        </View>
      )}
    </>
  );
};

export default ReviewItem;
