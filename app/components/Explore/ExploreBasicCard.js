import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";

import globalStyles from "../../../global/globalStyles";

const ExploreBasicCard = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.cardView}>
        <Image style={styles.image} source={{ uri: item.url }} />
      </View>
      <View style={styles.textView}>
        <Text style={styles.itemTitle}>{item.title}</Text>
      </View>
    </View>
  );
};

const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...globalStyles.marginHorizontal,
    width: 0.5 * width,
    height: 0.32 * height,
  },
  cardView: {
    flex: 1,
    backgroundColor: "white",
    marginHorizontal: 1,
    marginVertical: 6,
    borderRadius: 8,
    shadowColor: "#000",
    elevation: 6,
  },
  textView: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: width - 20,
    height: height / 2,
    borderRadius: 10,
  },
  itemTitle: {
    color: "black",
    marginBottom: 5,
    ...globalStyles.normalText,
  },
  itemDescription: {
    color: "black",
    ...globalStyles.normalText,
  },
});

export default ExploreBasicCard;
