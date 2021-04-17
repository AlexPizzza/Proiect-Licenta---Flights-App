import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ExploreScreen from "../../screens/explore/ExploreScreen";

const Stack = createStackNavigator();

const ExploreStack = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Explore" component={ExploreScreen} />
    </Stack.Navigator>
  );
};

export default ExploreStack;
