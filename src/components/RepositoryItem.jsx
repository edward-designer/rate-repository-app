import { View, Image, Pressable, StyleSheet } from "react-native";
import * as Linking from "expo-linking";

import NativeText from "./NativeText";
import StatItem from "./StatItem";

import theme from "../theme";

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFF",
    padding: 10,
    display: "flex",
    marginBottom: 10,
  },
  detailsCard: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingTop: 10,
    paddingBottom: 20,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  details: {
    paddingLeft: 20,
    flex: 1,
  },
  stat: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  tag: {
    backgroundColor: theme.colors.primary,
    color: "#fff",
    padding: 10,
    paddingBottom: 10,
    borderRadius: 10,
    overflow: "hidden",
  },
  button: {
    fontWeight: "bold",
    textAlign: "center",
    color: "#fff",
    paddingTop: 10,
    paddingBottom: 10,
  },
});

const RepositoryItem = ({ item }) => {
  const parseStat = (count) => {
    if (count > 1000) {
      return String(Math.round(count / 100) / 10) + "k";
    }
    return count;
  };
  return (
    <View testID="repositoryItem" style={styles.card}>
      <View style={styles.detailsCard}>
        <Image
          style={styles.image}
          source={{
            uri: item.ownerAvatarUrl,
          }}
        />
        <View style={styles.details}>
          <NativeText fontSize="subheading" fontWeight="bold">
            {item.fullName}
          </NativeText>
          <NativeText>{item.description}</NativeText>
          <View style={{ alignSelf: "flex-start" }}>
            <NativeText style={styles.tag}>
              {item.language || "Not Specified"}
            </NativeText>
          </View>
        </View>
      </View>
      <View style={styles.stat}>
        <StatItem count={parseStat(item.stargazersCount)} type="Stars" />
        <StatItem count={parseStat(item.forksCount)} type="Forks" />
        <StatItem count={parseStat(item.reviewCount)} type="Review" />
        <StatItem count={parseStat(item.ratingAverage)} type="Rating" />
      </View>
      {item.url && (
        <View>
          <Pressable
            onPress={() => Linking.openURL(item.url)}
            style={styles.tag}
          >
            <NativeText style={styles.button}>Open in GitHub</NativeText>
          </Pressable>
        </View>
      )}
    </View>
  );
};

export default RepositoryItem;
