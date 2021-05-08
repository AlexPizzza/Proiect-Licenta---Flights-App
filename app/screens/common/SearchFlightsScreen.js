import React from "react";
import { StyleSheet, Text, View } from "react-native";

const SearchFlightsScreen = ({ screen }) => {
  return (
    <View style={styles.container}>
      <Text>Search Flights Screen from {screen}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default SearchFlightsScreen;
