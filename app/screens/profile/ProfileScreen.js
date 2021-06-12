import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Avatar } from "react-native-elements";

import { auth } from "../../config/firebase";

import ProfileCard from "../../components/profile/ProfileCard";

import settingsImage from "../../../assets/profile/settings.png";
import supportImage from "../../../assets/profile/support.png";
import yourDetailsImage from "../../../assets/profile/your_details.png";
import statisticsImage from "../../../assets/profile/statistics.png";

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
          title={auth.currentUser.displayName[0]}
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

      <View style={styles.cardsView}>
        <ProfileCard
          title="Your Details"
          image={yourDetailsImage}
          useNavigation={() => navigation.navigate("YourDetailsStack")}
        />
        <ProfileCard
          title="Settings"
          image={settingsImage}
          useNavigation={() => navigation.navigate("SettingsStack")}
        />
      </View>

      <View style={styles.cardsView}>
        <ProfileCard
          title="Support"
          image={supportImage}
          useNavigation={() => navigation.navigate("SupportStack")}
        />
        <ProfileCard
          title="Statistics"
          image={statisticsImage}
          useNavigation={() => navigation.navigate("StatisticsStack")}
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
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    marginBottom: 24,
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
  cardsView: {
    flexDirection: "row",
    justifyContent: "space-between",
    ...globalStyles.marginHorizontal,
  },
});

export default ProfileScreen;
