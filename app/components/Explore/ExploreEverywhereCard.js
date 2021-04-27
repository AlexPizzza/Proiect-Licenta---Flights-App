import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";

import Ripple from "react-native-material-ripple";

import exploreEverywhereImage from "../../../assets/explore-everywhere.jpg";

import colors from "../../../global/colors";
import globalStyles from "../../../global/globalStyles";

const { width, height } = Dimensions.get("window");

const ExploreEverywhereCard = () => {
  return (
    <Ripple
      rippleColor={colors.EXPLORE_CARD_TAP}
      rippleOpacity={0.8}
      rippleContainerBorderRadius={12}
      onLongPress={() => {}}
      delayLongPress={150}
      style={styles.container}
    >
      <Image source={exploreEverywhereImage} style={styles.imageStyle} />
      <View style={styles.innerContainer}>
        <View style={styles.opaqueContainer} />
        <Text style={styles.text}>Explore Everywhere</Text>
      </View>
    </Ripple>
  );
};

const styles = StyleSheet.create({
  container: {
    height: height / 3,
    ...globalStyles.marginHorizontal,
    alignItems: "center",
  },
  imageStyle: {
    height: height / 3,
    width: width - 2 * globalStyles.marginHorizontal.marginHorizontal,
    borderRadius: 8,
  },
  innerContainer: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    top: 95,
    height: 40,
    width: 250,
  },
  opaqueContainer: {
    width: 250,
    height: 40,
    backgroundColor: colors.BLACK,
    opacity: 0.4,
    borderRadius: 8,
  },
  text: {
    position: "absolute",
    color: colors.ORANGE,
    ...globalStyles.headerText,
    fontSize: 22,
  },
});

export default ExploreEverywhereCard;
