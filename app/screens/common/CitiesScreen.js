import React, { useContext, useEffect, useState } from "react";
import { ActivityIndicator, FlatList, StyleSheet, View } from "react-native";

import { Context as FlightsContext } from "../../context/FlightsContext";

import colors from "../../../global/colors";
import CityCard from "../../components/common/CityCard";

const CitiesScreen = ({ route }) => {
  const {
    state: { cities },
  } = useContext(FlightsContext);

  return (
    <View style={styles.container}>
      {!cities ? (
        <ActivityIndicator size="large" />
      ) : (
        <FlatList
          showsVerticalScrollIndicator={false}
          decelerationRat={0.8}
          data={cities}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => {
            return <CityCard item={item.data} />;
          }}
        />
      )}
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

export default CitiesScreen;
