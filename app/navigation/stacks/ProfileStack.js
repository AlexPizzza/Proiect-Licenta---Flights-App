import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ProfileScreen from "../../screens/profile/ProfileScreen";
import SettingsScreen from "../../screens/profile/SettingsScreen";
import SupportScreen from "../../screens/profile/SupportScreen";
import YourDetailsStack from "./Profile/YourDetailsStack";
import SettingsStack from "./Profile/SettingsStack";
import SupportStack from "./Profile/SupportStack";

const Stack = createStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator initialRouteName="Profile" headerMode="none">
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="YourDetailsStack"
        component={YourDetailsStack}
        options={{
          headerStyle: {
            elevation: 0,
          },
          title: "",
        }}
      />
      <Stack.Screen
        name="SettingsStack"
        component={SettingsStack}
        options={{
          headerStyle: {
            elevation: 0,
          },
          title: "",
        }}
      />
      <Stack.Screen
        name="SupportStack"
        component={SupportStack}
        options={{
          headerStyle: {
            elevation: 0,
          },
          title: "",
        }}
      />
    </Stack.Navigator>
  );
};

export default ProfileStack;
