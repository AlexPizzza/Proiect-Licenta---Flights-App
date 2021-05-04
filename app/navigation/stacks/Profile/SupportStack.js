import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SupportScreen from "../../../screens/profile/SupportScreen";

const Stack = createStackNavigator();

const SupportStack = () => {
  return (
    <Stack.Navigator initialRouteName="Support">
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

export default SupportStack;
