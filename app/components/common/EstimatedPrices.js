import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";

import Toast from "react-native-simple-toast";
import Ripple from "react-native-material-ripple";
import { Entypo } from "@expo/vector-icons";

import globalStyles from "../../../global/globalStyles";
import colors from "../../../global/colors";

const EstimatedPrices = () => {
  return (
    <Ripple
      rippleColor={colors.GRAY}
      rippleOpacity={0.9}
      rippleContainerBorderRadius={12}
      style={styles.container}
      onPress={() => {
        Toast.show(
          "Estimated lowest prices per person for Economy class for a Round Trip flight"
        );
      }}
      onLongPress={() => {
        Toast.show(
          "Estimated lowest prices per person for Economy class for a Round Trip flight"
        );
      }}
      delayLongPress={150}
    >
      <Entypo
        name="info-with-circle"
        size={20}
        style={{ marginRight: -4, color: colors.LIGHT_GRAY }}
      />
      <View style={{ alignItems: "center" }}>
        <Text
          style={{
            ...globalStyles.normalText,
            ...globalStyles.marginHorizontal,
            fontSize: 18,
          }}
        >
          * Estimated lowest prices
        </Text>
      </View>
    </Ripple>
  );
};

const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 40,
    width,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default EstimatedPrices;
