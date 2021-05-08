import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SearchScreen from "../../screens/search/SearchScreen";
import SearchFlightsScreen from "../../screens/common/SearchFlightsScreen";

const Stack = createStackNavigator();

const SearchStack = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen name="SearchFlights" component={SearchFlightsScreen} />
    </Stack.Navigator>
  );
};

export default SearchStack;
