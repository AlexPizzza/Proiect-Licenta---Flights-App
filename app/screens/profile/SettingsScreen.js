import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { ListItem } from "react-native-elements";

import Ripple from "react-native-material-ripple";

import colors from "../../../global/colors";
import globalStyles from "../../../global/globalStyles";

const list = [
  {
    title: "Currency",
    subTitle: "Romanian Leu",
  },
];

const SettingsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.settingsHeaderText}>Settings</Text>
      {list.map((item, index) => (
        <Ripple
          key={index}
          rippleColor={colors.PURPLE}
          rippleOpacity={0.8}
          onLongPress={() => {}}
          delayLongPress={150}
        >
          <ListItem bottomDivider>
            <ListItem.Content>
              <ListItem.Title style={styles.title}>{item.title}</ListItem.Title>
              <ListItem.Subtitle style={styles.title}>
                {item.subTitle}
              </ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Chevron
              size={20}
              iconStyle={{ color: colors.PURPLE_LIGHT }}
            />
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
  settingsHeaderText: {
    ...globalStyles.headerBoldText,
    ...globalStyles.marginHorizontal,

    fontSize: 40,
    marginBottom: 16,
  },
  title: {
    ...globalStyles.normalText,
  },
});

export default SettingsScreen;
