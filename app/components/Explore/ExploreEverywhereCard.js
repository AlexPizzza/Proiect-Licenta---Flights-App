import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Ripple from "react-native-material-ripple";

import exploreEverywhereImage from "../../../assets/explore/explore-everywhere.jpg";

import colors from "../../../global/colors";
import globalStyles from "../../../global/globalStyles";

const ExploreEverywhereCard = () => {
  const navigation = useNavigation();

  const goToExploreCountries = () => {
    navigation.navigate("Recommended", {
      title: "Explore Everywhere",
      searchType: "explore_everywhere",
    });
  };

  return (
    <View style={styles.container}>
      <Ripple
        rippleColor={colors.EXPLORE_CARD_TAP}
        rippleOpacity={0.4}
        rippleContainerBorderRadius={8}
        onPress={goToExploreCountries}
        onLongPress={goToExploreCountries}
        delayLongPress={150}
        style={styles.rippleContainer}
      >
        <Image source={exploreEverywhereImage} style={styles.imageStyle} />
        <View style={styles.innerContainer}>
          <View style={styles.opaqueContainer} />
          <Text style={styles.text}>Explore Everywhere</Text>
        </View>
      </Ripple>
    </View>
  );
};

const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    height: height / 3,
    ...globalStyles.marginHorizontal,
    marginBottom: 8,
    elevation: 30,
    shadowColor: "#000",
  },
  rippleContainer: {
    height: height / 3,
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
