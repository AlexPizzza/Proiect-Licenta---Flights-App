import React from "react";
import { StyleSheet, Text } from "react-native";
import Ripple from "react-native-material-ripple";

import colors from "../../../global/colors";
import globalStyles from "../../../global/globalStyles";

const RippleText = ({ text, setIsRoundTrip }) => {
  const _setIsRoundTrip = () => {
    text === "ROUNDTRIP" ? setIsRoundTrip(true) : setIsRoundTrip(false);
  };

  return (
    <Ripple
      rippleColor={colors.ORANGE}
      rippleOpacity={0.8}
      rippleContainerBorderRadius={12}
      style={{ padding: 8 }}
      onPress={_setIsRoundTrip}
      onLongPress={_setIsRoundTrip}
      delayLongPress={150}
    >
      <Text style={styles.textStyle}>{text}</Text>
    </Ripple>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    ...globalStyles.normalText,
    color: colors.BLACK,
  },
});

export default RippleText;
