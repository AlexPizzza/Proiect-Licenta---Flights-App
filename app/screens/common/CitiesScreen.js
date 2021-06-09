import React, { useContext } from "react";
import {
  ActivityIndicator,
  FlatList,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import { Divider } from "react-native-elements";

import CityCard from "../../components/common/CityCard";
import EstimatedPrices from "../../components/common/EstimatedPrices";
import CityBar from "../../components/common/CityBar";

import { Context as FlightsContext } from "../../context/FlightsContext";

import colors from "../../../global/colors";
import globalStyles from "../../../global/globalStyles";

const CitiesScreen = () => {
  const {
    state: { cities },
  } = useContext(FlightsContext);
  return (
    <View style={styles.container}>
      <View>
        {!cities ? (
          <ActivityIndicator size="large" />
        ) : (
          <ScrollView>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-evenly",
                marginVertical: 10,
                ...globalStyles.marginHorizontal,
              }}
            >
              <CityBar bdRadius={10} text="Bucharest" />
            </View>
            <Divider
              style={{
                backgroundColor: colors.BLACK,
              }}
            />
            <EstimatedPrices />
            <Divider
              style={{
                backgroundColor: colors.BLACK,
              }}
            />
            {cities.map((item, index) => (
              <CityCard key={"key" + index} item={item.data} />
            ))}
          </ScrollView>
        )}
      </View>
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
