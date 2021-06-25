import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Ripple from "react-native-material-ripple";

import colors from "../../../../global/colors";
import globalStyles from "../../../../global/globalStyles";

const ChangeFullNameButton = ({ onPress }) => {
  return (
    <Ripple
      rippleColor={colors.WHITE}
      rippleOpacity={0.8}
      rippleContainerBorderRadius={12}
      style={styles.buttonStyle}
      onPress={onPress}
      onLongPress={onPress}
      delayLongPress={150}
    >
      <Text style={styles.titleStyle}>Change Full Name</Text>
    </Ripple>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    width: 250,
    height: 40,
    borderRadius: 40,
    backgroundColor: colors.ORANGE,
    marginBottom: 20,
  },
  titleStyle: {
    ...globalStyles.boldText,
    fontSize: 20,
    color: colors.WHITE,
  },
});

export default ChangeFullNameButton;
