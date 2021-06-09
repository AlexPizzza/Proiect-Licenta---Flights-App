import React, { useCallback } from "react";
import { Linking, StyleSheet, Text } from "react-native";

import Ripple from "react-native-material-ripple";

import colors from "../../../global/colors";
import globalStyles from "../../../global/globalStyles";

const url = "https://wizzair.com/ro-ro#/";

const ButtonGoToProvider = () => {
  const handlePress = useCallback(async () => {
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`URL format is bad: ${url}`);
    }
  }, [url]);

  return (
    <Ripple
      rippleColor={colors.WHITE}
      rippleOpacity={0.8}
      rippleContainerBorderRadius={12}
      style={styles.buttonStyle}
      onPress={handlePress}
      onLongPress={handlePress}
      delayLongPress={150}
    >
      <Text style={styles.titleStyle}>Go to Provider</Text>
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

export default ButtonGoToProvider;
