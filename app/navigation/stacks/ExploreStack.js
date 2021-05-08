import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ExploreScreen from "../../screens/explore/ExploreScreen";
import SearchFlightsScreen from "../../screens/common/SearchFlightsScreen";

const Stack = createStackNavigator();

const ExploreStack = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Explore" component={ExploreScreen} />
      <Stack.Screen name="SearchFlights" component={SearchFlightsScreen} />
    </Stack.Navigator>
  );
};

export default ExploreStack;
