import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";

import Ripple from "react-native-material-ripple";

import globalStyles from "../../../global/globalStyles";
import colors from "../../../global/colors";

const ProfileCard = ({ title, image, useNavigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.cardView}>
        <Ripple
          rippleColor={colors.PURPLE}
          rippleOpacity={0.8}
          rippleContainerBorderRadius={20}
          style={styles.rippleStyle}
          onPress={useNavigation}
          onLongPress={useNavigation}
          delayLongPress={150}
        >
          <Image source={image} style={styles.image} />
          <Text style={styles.textStyle}>{title}</Text>
        </Ripple>
      </View>
    </View>
  );
};

const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    width: 0.45 * width,
    height: 0.3 * height,
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
  image: {
    width: 80,
    height: 80,
    marginBottom: 26,
  },
  rippleStyle: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 10,
  },
  textStyle: {
    ...globalStyles.normalText,
    marginBottom: 6,
  },
});

export default ProfileCard;
