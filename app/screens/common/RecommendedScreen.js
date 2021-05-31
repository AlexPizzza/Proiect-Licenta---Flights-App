import React, { useContext } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import RecommendedScreenCard from "../../components/recommendedScreen/RecommendedScreenCard";

import { Context as FlightsContext } from "../../context/FlightsContext";

import colors from "../../../global/colors";

const RecommendedScreen = ({ route }) => {
  const {
    state: {
      recommendedCountries,
      popularDestinations,
      quickGetaways,
      longerTrips,
      lastMinute,
      planAhead,
    },
  } = useContext(FlightsContext);

  const { searchType } = route.params;

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        decelerationRat={0.8}
        data={
          searchType === "recommended"
            ? recommendedCountries
            : searchType === "popular_destinations"
            ? popularDestinations
            : searchType === "quick_getaways"
            ? quickGetaways
            : searchType === "longer_trips"
            ? longerTrips
            : searchType === "last_minute"
            ? lastMinute
            : searchType === "plan_ahead"
            ? planAhead
            : null
        }
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return <RecommendedScreenCard item={item.data} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.BG_COLOR,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default RecommendedScreen;
