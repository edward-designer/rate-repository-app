import { View, Image, StyleSheet } from "react-native";
import NativeText from "./NativeText";
import StatItem from "./StatItem";
import theme from "../theme";

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFF",
    padding: 10,
    display: "flex",
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
});

const RepositoryItem = ({ item }) => {
  const parseStat = (count) => {
    if (count > 1000) {
      return String(Math.round(count / 100) / 10) + "k";
    }
    return count;
  };
  return (
    <View style={styles.card}>
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
            <NativeText style={styles.tag}>{item.language}</NativeText>
          </View>
        </View>
      </View>
      <View style={styles.stat}>
        <StatItem count={parseStat(item.stargazersCount)} type="Stars" />
        <StatItem count={parseStat(item.forksCount)} type="Forks" />
        <StatItem count={parseStat(item.reviewCount)} type="Review" />
        <StatItem count={parseStat(item.ratingAverage)} type="Rating" />
      </View>
    </View>
  );
};

export default RepositoryItem;
