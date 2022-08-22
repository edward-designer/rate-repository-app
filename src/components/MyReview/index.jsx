import { FlatList, View, StyleSheet } from "react-native";

import NativeText from "../NativeText";

import useGetMe from "../../hooks/useGetMe";
import ReviewItem from "../ReviewItem";
import Separator from "../Separator";

const styles = StyleSheet.create({
  loading: {
    display: "flex",
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});

const MyReviews = () => {
  const { reviews, fetchMore, loading } = useGetMe({
    first: 3,
    includeReviews: true,
  });

  const onEndReach = () => {
    fetchMore();
  };

  if (loading) {
    return (
      <View style={styles.loading}>
        <NativeText>loading...</NativeText>
      </View>
    );
  }
  return (
    <FlatList
      data={reviews.edges}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={(item) => item.node.id}
      ItemSeparatorComponent={() => <Separator />}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.1}
    />
  );
};

export default MyReviews;
