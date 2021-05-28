import React, { useContext } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import RecommendedScreenCard from "../../components/recommendedScreen/RecommendedScreenCard";

import { Context as FlightsContext } from "../../context/FlightsContext";

import colors from "../../../global/colors";

const RecommendedScreen = () => {
  const {
    state: { recommendedCountries },
  } = useContext(FlightsContext);

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        decelerationRat={0.8}
        data={recommendedCountries}
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
