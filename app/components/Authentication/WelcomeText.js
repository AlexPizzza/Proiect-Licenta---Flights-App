import React from "react";
import { StyleSheet, Text, View } from "react-native";

import globalStyles from "../../../global/globalStyles";

const WelcomeText = ({ headerText, normalText }) => {
  return (
    <View style={styles.welcomeTextStyle}>
      <Text style={[globalStyles.headerBoldText, styles.headerText]}>
        {headerText}
      </Text>
      <Text style={[globalStyles.normalText, styles.normalText]}>
        {normalText}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  welcomeTextStyle: {
    flex: 1,
    alignItems: "center",
    marginTop: 20,
    marginBottom: 50,
  },
  headerText: {
    marginBottom: 4,
    fontWeight: "bold",
  },
  normalText: {
    textAlign: "center",
  },
});

export default WelcomeText;
