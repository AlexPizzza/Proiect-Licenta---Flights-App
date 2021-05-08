import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";

import Ripple from "react-native-material-ripple";

import globalStyles from "../../../global/globalStyles";
import colors from "../../../global/colors";

const RecommendedCard = ({ item }) => {
  return (
    <View style={styles.container}>
      <Ripple
        rippleColor={colors.WHITE}
        rippleOpacity={0.8}
        rippleContainerBorderRadius={20}
        onLongPress={() => {}}
        delayLongPress={150}
        style={styles.cardView}
      >
        <Image style={styles.image} source={{ uri: item.image }} />
        <View style={styles.textView}>
          <Text style={styles.itemTitle}>{item.country_name}</Text>
          <Text style={styles.itemDescription}>{item.description}</Text>
        </View>
      </Ripple>
    </View>
  );
};

const { width, height } = Dimensions.get("window");
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
    width: 240,
    height: 170,
    borderRadius: 10,
    marginTop: 10,
    alignSelf: "center",
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
