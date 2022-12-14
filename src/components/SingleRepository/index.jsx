import { FlatList, View, StyleSheet } from "react-native";
import { useParams } from "react-router-native";

import NativeText from "../NativeText";

import useRepository from "../../hooks/useRepository";
import RepositoryItem from "../RepositoryItem";
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

const SingleRepository = () => {
  const { id } = useParams();
  const { repository, fetchMore, loading } = useRepository({
    first: 2,
    repositoryId: id,
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
      data={repository.reviews.edges}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={(item) => item.node.id}
      ListHeaderComponent={() => (
        <>
          <RepositoryItem item={repository} />
          <Separator />
        </>
      )}
      ItemSeparatorComponent={() => <Separator />}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
    />
  );
};

export default SingleRepository;
