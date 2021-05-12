import React from "react";
import { StyleSheet, Text } from "react-native";

import Ripple from "react-native-material-ripple";

import colors from "../../../global/colors";
import globalStyles from "../../../global/globalStyles";

const ButtonSearchFlights = () => {
  return (
    <Ripple
      rippleColor={colors.WHITE}
      rippleOpacity={0.8}
      rippleContainerBorderRadius={12}
      style={styles.buttonStyle}
      onPress={() => console.log("Search Flights Button")}
      onLongPress={() => console.log("Search Flights Button")}
      delayLongPress={150}
    >
      <Text style={styles.titleStyle}>Search Flight</Text>
    </Ripple>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    width: 250,
    height: 40,
    borderRadius: 40,
    backgroundColor: colors.ORANGE,
  },
  titleStyle: {
    ...globalStyles.boldText,
    fontSize: 20,
    color: colors.WHITE,
  },
});

export default ButtonSearchFlights;
