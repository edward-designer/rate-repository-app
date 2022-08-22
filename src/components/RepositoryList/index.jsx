import { useState } from "react";
import { FlatList, Pressable, StyleSheet } from "react-native";
import { useNavigate } from "react-router-native";
import { Picker } from "@react-native-picker/picker";
import { Searchbar } from "react-native-paper";
import { useDebouncedCallback } from "use-debounce";

import useRepositories from "../../hooks/useRepositories";
import RepositoryItem from "../RepositoryItem";

import Separator from "../Separator";

const styles = StyleSheet.create({
  container: {
    display: "flex",
  },
});

export const RepositoryListContainer = ({
  repositories,
  selectOrder,
  orderBy,
  orderDirection,
  setSearchKeyword,
  onEndReach,
}) => {
  const [display, setDisplay] = useState("");
  const navigate = useNavigate();
  const goToRepository = (id) => {
    navigate(`/Repository/${id}`, { replace: true });
  };

  const searchHandler = (value) => {
    setDisplay(value);
    debouncedSearch(value);
  };
  const debouncedSearch = useDebouncedCallback((value) => {
    setSearchKeyword(value);
  }, 500);

  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      data={repositoryNodes}
      contentContainerStyle={styles.containers}
      ItemSeparatorComponent={() => <Separator />}
      renderItem={({ item }) => (
        <Pressable onPress={() => goToRepository(item.id)}>
          <RepositoryItem item={item} />
        </Pressable>
      )}
      keyExtractor={(item) => item.id}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
      ListHeaderComponent={
        <>
          <Searchbar
            placeholder="Search"
            onChangeText={(query) => searchHandler(query)}
            value={display}
          />
          <Picker
            selectedValue={`${orderBy} ${orderDirection}`}
            onValueChange={(itemValue) => selectOrder(itemValue)}
          >
            <Picker.Item label="Latest repositories" value="CREATED_AT DESC" />
            <Picker.Item
              label="Highest rated repositories"
              value="RATING_AVERAGE DESC"
            />
            <Picker.Item
              label="Lowest rated repositories"
              value="RATING_AVERAGE ASC"
            />
          </Picker>
        </>
      }
    />
  );
};

const RepositoryList = () => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [order, setOrder] = useState({
    orderBy: "CREATED_AT",
    orderDirection: "DESC",
  });
  const { orderBy, orderDirection } = order;
  const { repositories, fetchMore } = useRepositories({
    first: 3,
    orderBy,
    orderDirection,
    searchKeyword,
  });

  const onEndReach = () => {
    fetchMore();
  };

  const selectOrder = (value) => {
    const [orderBy, orderDirection] = value.split(" ");
    setOrder({ orderBy, orderDirection });
  };
  return (
    <RepositoryListContainer
      repositories={repositories}
      selectOrder={selectOrder}
      orderBy={orderBy}
      orderDirection={orderDirection}
      searchKeyword={searchKeyword}
      setSearchKeyword={setSearchKeyword}
      onEndReach={onEndReach}
    />
  );
};

export default RepositoryList;
