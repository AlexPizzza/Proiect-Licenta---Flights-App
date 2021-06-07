import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { ListItem } from "react-native-elements";

import Ripple from "react-native-material-ripple";

import colors from "../../../global/colors";
import globalStyles from "../../../global/globalStyles";

const list = [
  {
    title: "Zbor 1",
  },
  {
    title: "Zbor 2",
  },
  {
    title: "Zbor 3",
  },
];

const SavedScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.savedFlightsHeaderText}>Saved Flights</Text>
      </View>

      {list.map((item, index) => (
        <Ripple
          key={index}
          rippleColor={colors.PURPLE}
          rippleOpacity={0.8}
          onLongPress={() => {}}
          delayLongPress={150}
        >
          <ListItem>
            <ListItem.Content>
              <ListItem.Title style={styles.title}>{item.title}</ListItem.Title>
            </ListItem.Content>
          </ListItem>
        </Ripple>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.BG_COLOR,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    marginBottom: 10,
    ...globalStyles.marginHorizontal,
  },
  savedFlightsHeaderText: {
    ...globalStyles.headerBoldText,
    fontSize: 40,
  },
});

export default SavedScreen;
