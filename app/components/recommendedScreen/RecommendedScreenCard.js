import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";

import Ripple from "react-native-material-ripple";

import globalStyles from "../../../global/globalStyles";
import colors from "../../../global/colors";

const RecommendedScreenCard = ({ item }) => {
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
        <View style={styles.textViewCountryName}>
          <Text style={styles.itemTitle}>{item.country_name}</Text>
        </View>
        <View style={styles.textViewPrice}>
          <Text style={styles.itemPrice}>from {item.price} lei</Text>
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
    width: 0.92 * width,
    height: 0.35 * height,
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
  textViewCountryName: {
    position: "absolute",
    bottom: 10,
    margin: 10,
    left: 12,
  },
  textViewPrice: {
    position: "absolute",
    bottom: 10,
    margin: 10,
    right: 12,
  },
  image: {
    width: 300,
    height: 200,
    borderRadius: 10,
    marginTop: 10,
    alignSelf: "center",
  },
  itemTitle: {
    color: colors.WHITE,
    marginBottom: 5,
    ...globalStyles.headerBoldText,
    fontSize: 20,
  },
  itemPrice: {
    color: colors.WHITE,
    marginBottom: 5,
    ...globalStyles.normalText,
    fontSize: 18,
  },
});

export default RecommendedScreenCard;
