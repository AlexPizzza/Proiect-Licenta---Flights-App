import React from "react";
import { StyleSheet, Text, View } from "react-native";

import colors from "../../../../global/colors";
import globalStyles from "../../../../global/globalStyles";

const ThirdPartyLicensesScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Third party licenses</Text>
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
    fontSize: 40,
    ...globalStyles.marginHorizontal,
    marginBottom: 30,
  },
});

export default ThirdPartyLicensesScreen;
