import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import TextFromCityToAirport from "../modal/TextFromCityToAirport";
import FlightInfoOneWay from "./FlightInfoOneWay";

import colors from "../../../global/colors";
import globalStyles from "../../../global/globalStyles";

const SeeFlightOneWay = ({ item }) => {
  const [departureDate, setDepartureDate] = useState("");

  useEffect(() => {
    let splitDepartureDate;
    if (item.data) {
      if (item.data.departure_date instanceof Date) {
        splitDepartureDate = item.data.departure_date.toString().split(" ");
      } else {
        splitDepartureDate = item.data.departure_date
          .toDate()
          .toString()
          .split(" ");
      }
    } else {
      if (item.departure_date instanceof Date) {
        splitDepartureDate = item.departure_date.toString().split(" ");
      } else {
        splitDepartureDate = item.departure_date.toDate().toString().split(" ");
      }
    }

    const departureDateToShow =
      splitDepartureDate[0] +
      ", " +
      splitDepartureDate[1] +
      " " +
      splitDepartureDate[2] +
      ", " +
      splitDepartureDate[3];

    setDepartureDate(departureDateToShow);
  }, []);

  return (
    <View style={styles.outerView}>
      <View style={styles.innerView}>
        <View style={styles.dateView}>
          <Text style={styles.dateTextStyle}>{departureDate}</Text>
        </View>

        <TextFromCityToAirport item={item} isFrom={true} />

        <FlightInfoOneWay item={item} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outerView: {
    ...globalStyles.marginHorizontal,
    borderRadius: 4,
    borderWidth: 1,
    marginTop: 26,
  },
  innerView: {
    backgroundColor: colors.WHITE,
    borderRadius: 4,
    elevation: 4,
  },
  textView: {
    margin: 16,
    marginTop: 20,
  },
  dateView: {
    position: "absolute",
    top: -20,
    left: 10,
    width: 200,
    height: 36,
    borderRadius: 10,
    backgroundColor: colors.PURPLE,
    borderWidth: 1,
    padding: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  dateTextStyle: {
    ...globalStyles.boldText,
    marginHorizontal: 6,
    fontSize: 20,
    color: colors.WHITE,
  },
});

export default SeeFlightOneWay;
