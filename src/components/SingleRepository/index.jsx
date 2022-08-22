import { FlatList, View, StyleSheet } from "react-native";
import { useParams } from "react-router-native";

import NativeText from "../NativeText";

import useRepository from "../../hooks/useRepository";
import RepositoryItem from "../RepositoryItem";
import ReviewItem from "./ReviewItem";
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
  const { repository, loading } = useRepository(id);
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
      keyExtractor={({ id }) => id}
      ListHeaderComponent={() => (
        <>
          <RepositoryItem item={repository} />
          <Separator />
        </>
      )}
      ItemSeparatorComponent={() => <Separator />}
    />
  );
};

export default SingleRepository;
