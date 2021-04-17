import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ProfileScreen from "../../screens/profile/ProfileScreen";
import YourDetailsScreen from "../../screens/profile/YourDetailsScreen";
import SettingsScreen from "../../screens/profile/SettingsScreen";
import SupportScreen from "../../screens/profile/SupportScreen";

const Stack = createStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator initialRouteName="Profile">
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="YourDetails"
        component={YourDetailsScreen}
        options={{
          headerStyle: {
            elevation: 0,
          },
          title: "",
        }}
      />
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          headerStyle: {
            elevation: 0,
          },
          title: "",
        }}
      />
      <Stack.Screen
        name="Support"
        component={SupportScreen}
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
