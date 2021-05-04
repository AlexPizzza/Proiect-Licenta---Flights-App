import React from "react";
import { StyleSheet, Text, View } from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { ListItem } from "react-native-elements";
import Ripple from "react-native-material-ripple";

import colors from "../../../../global/colors";
import globalStyles from "../../../../global/globalStyles";

const list = [
  {
    title: "Clear app search history",
  },
  {
    title: "Clear async storage",
  },
];

const AccountManagementScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Text style={styles.yourDetailsHeaderText}>Manage your account</Text>
        {list.map((item, index) => (
          <Ripple
            key={index}
            rippleColor={colors.PURPLE}
            rippleOpacity={0.8}
            onPress={() => {
              if (item.title.toLowerCase().includes("search".toLowerCase())) {
                // signout();
              } else if (
                item.title.toLowerCase().includes("async".toLowerCase())
              ) {
                const clear = async () => {
                  await AsyncStorage.clear();
                };
                clear();
              }
            }}
            onLongPress={() => {
              if (item.title.toLowerCase().includes("search".toLowerCase())) {
              } else if (
                item.title.toLowerCase().includes("async".toLowerCase())
              ) {
                const clear = async () => {
                  await AsyncStorage.clear();
                };
                clear();
              }
            }}
            delayLongPress={150}
          >
            <ListItem bottomDivider>
              <ListItem.Content>
                <ListItem.Title style={styles.title}>
                  {item.title}
                </ListItem.Title>
              </ListItem.Content>
              <ListItem.Chevron
                size={20}
                iconStyle={{ color: colors.PURPLE_LIGHT }}
              />
            </ListItem>
          </Ripple>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.BG_COLOR,
  },
  subContainer: {
    paddingLeft: globalStyles.marginHorizontal.value,
  },
  yourDetailsHeaderText: {
    ...globalStyles.headerBoldText,
    fontSize: 40,
    ...globalStyles.marginHorizontal,
    marginBottom: 16,
  },
  title: {
    ...globalStyles.normalText,
  },
});

export default AccountManagementScreen;
