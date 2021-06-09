import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";

import Ripple from "react-native-material-ripple";
import colors from "../../../global/colors";

import globalStyles from "../../../global/globalStyles";

const CityBar = ({ text, bdRadius, onPress }) => {
  return (
    <Ripple
      rippleColor={colors.WHITE}
      rippleOpacity={0.8}
      rippleContainerBorderRadius={bdRadius}
      style={[styles.ripple, { borderRadius: bdRadius }]}
      onPress={onPress}
      onLongPress={onPress}
      delayLongPress={150}
    >
      <View style={styles.innerView}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </Ripple>
  );
};

const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  ripple: {
    padding: 12,
    ...globalStyles.marginHorizontal,
    backgroundColor: colors.ORANGE,
    width: width * 0.92,
  },
  innerView: {
    alignItems: "center",
  },
  text: {
    color: colors.WHITE,
    ...globalStyles.normalText,
    marginHorizontal: 10,
  },
});

export default CityBar;
