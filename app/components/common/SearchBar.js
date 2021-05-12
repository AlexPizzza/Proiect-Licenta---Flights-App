import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Ripple from "react-native-material-ripple";

import { Feather } from "@expo/vector-icons";

import colors from "../../../global/colors";
import globalStyles from "../../../global/globalStyles";

const SearchBar = ({ sbText, bdRadius, marginBottom, onPress }) => {
  return (
    <Ripple
      rippleColor={colors.SILVER}
      rippleOpacity={0.8}
      rippleContainerBorderRadius={bdRadius}
      style={{ ...styles.ripple, borderRadius: bdRadius, marginBottom }}
      onPress={onPress}
      onLongPress={onPress}
      delayLongPress={150}
    >
      <View style={styles.innerView}>
        <Feather name="search" size={24} color={colors.PURPLE} />
        <Text style={styles.text}>{sbText}</Text>
      </View>
    </Ripple>
  );
};

const styles = StyleSheet.create({
  ripple: {
    padding: 12,
    ...globalStyles.marginHorizontal,
    marginVertical: 20,
    backgroundColor: colors.SEARCH_CONTAINER,
  },
  innerView: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    color: colors.SEARCH_INPUT_TEXT,
    ...globalStyles.normalText,
    paddingLeft: 12,
  },
});

export default SearchBar;
