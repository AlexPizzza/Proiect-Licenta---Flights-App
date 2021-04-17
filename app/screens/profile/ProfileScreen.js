import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Avatar } from "react-native-elements";

import ProfileCard from "../../components/Profile/ProfileCard";

import colors from "../../../global/colors";
import globalStyles from "../../../global/globalStyles";

const ProfileScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.profileHeaderText}>Profile</Text>

        <Avatar
          rounded
          size="large"
          title="A"
          containerStyle={{
            backgroundColor: colors.PURPLE,
            marginTop: 20,
            alignSelf: "flex-end",
            width: 100,
            height: 100,
            borderRadius: 100,
          }}
          titleStyle={{
            fontSize: 50,
          }}
        />
      </View>

      <Text style={styles.manageAccountText}>Manage your account</Text>

      <View style={styles.details_settings_Container}>
        <ProfileCard
          title="Your Details"
          useNavigation={() => navigation.navigate("YourDetails")}
        />
        <ProfileCard
          title="Settings"
          useNavigation={() => navigation.navigate("Settings")}
        />
      </View>

      <View style={styles.supportCard}>
        <ProfileCard
          title="Support"
          useNavigation={() => navigation.navigate("Support")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.BG_COLOR,
  },
  details_settings_Container: {
    flexDirection: "row",
    justifyContent: "space-between",
    ...globalStyles.marginHorizontal,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 24,
    ...globalStyles.marginHorizontal,
  },
  manageAccountText: {
    ...globalStyles.headerText,
    ...globalStyles.marginHorizontal,
  },
  profileHeaderText: {
    ...globalStyles.headerBoldText,
    fontSize: 40,
  },
  supportCard: {
    ...globalStyles.marginHorizontal,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ProfileScreen;
