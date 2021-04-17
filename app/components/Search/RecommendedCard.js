import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";

import globalStyles from "../../../global/globalStyles";

const { width, height } = Dimensions.get("window");

const RecommendedCard = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.cardView}>
        <Image style={styles.image} source={{ uri: item.url }} />
        <View style={styles.textView}>
          <Text style={styles.itemTitle}>{item.title}</Text>
          <Text style={styles.itemDescription}>{item.description}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...globalStyles.marginHorizontal,
    width: 0.75 * width,
    height: 0.45 * height,
  },
  cardView: {
    flex: 1,
    backgroundColor: "white",
    marginHorizontal: 4,
    marginVertical: 10,
    borderRadius: 20,
    shadowColor: "#000",
    elevation: 10,
  },
  textView: {
    position: "absolute",
    bottom: 10,
    margin: 10,
    left: 5,
  },
  image: {
    width: width - 20,
    height: height / 2,
    borderRadius: 10,
  },
  itemTitle: {
    color: "black",
    marginBottom: 5,
    ...globalStyles.headerBoldText,
  },
  itemDescription: {
    color: "black",
    ...globalStyles.normalText,
  },
});

export default RecommendedCard;
