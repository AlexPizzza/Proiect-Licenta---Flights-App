import React, { useContext } from "react";
import { Dimensions, FlatList, StyleSheet, Text, View } from "react-native";
import { Divider } from "react-native-elements";
import Toast from "react-native-simple-toast";
import Ripple from "react-native-material-ripple";
import { Entypo } from "@expo/vector-icons";

import RecommendedScreenCard from "../../components/recommendedScreen/RecommendedScreenCard";

import { Context as FlightsContext } from "../../context/FlightsContext";

import colors from "../../../global/colors";
import globalStyles from "../../../global/globalStyles";

const { width, height } = Dimensions.get("window");
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
        renderItem={({ item, index }) => {
          if (index === 0) {
            return (
              <Ripple
                rippleColor={colors.GRAY}
                rippleOpacity={0.9}
                rippleContainerBorderRadius={12}
                style={{
                  flexDirection: "row",
                  height: 40,
                  width,
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onPress={() => {
                  Toast.show(
                    "Estimated lowest prices per person for Economy class"
                  );
                }}
                onLongPress={() => {
                  Toast.show(
                    "Estimated lowest prices per person for Economy class"
                  );
                }}
                delayLongPress={150}
              >
                <Entypo
                  name="info-with-circle"
                  size={20}
                  style={{ marginRight: -4, color: colors.LIGHT_GRAY }}
                />
                <View style={{ alignItems: "center" }}>
                  <Text
                    style={{
                      ...globalStyles.normalText,
                      ...globalStyles.marginHorizontal,
                      fontSize: 18,
                    }}
                  >
                    * Estimated lowest prices
                  </Text>
                </View>
              </Ripple>
            );
          } else if (index === 1)
            return (
              <Divider
                style={{
                  backgroundColor: colors.BLACK,
                }}
              />
            );
          else return <RecommendedScreenCard item={item.data} />;
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
