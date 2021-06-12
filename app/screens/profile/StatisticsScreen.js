import React from "react";
import { StyleSheet, Text, View } from "react-native";

import colors from "../../../global/colors";
import globalStyles from "../../../global/globalStyles";

const StatisticsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Statistics</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.BG_COLOR,
  },
  headerText: {
    ...globalStyles.headerBoldText,
    ...globalStyles.marginHorizontal,
    fontSize: 40,
    marginBottom: 30,
  },
});

export default StatisticsScreen;
