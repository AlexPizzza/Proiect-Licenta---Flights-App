import React from "react";
import { StyleSheet, Text, View } from "react-native";

import colors from "../../../global/colors";

const SupportScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Support Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.BG_COLOR,
  },
});

export default SupportScreen;
