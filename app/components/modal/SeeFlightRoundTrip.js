import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import TextFromCityToAirport from "../modal/TextFromCityToAirport";
import FlightInfoRoundTrip from "./FlightInfoRoundTrip";

import colors from "../../../global/colors";
import globalStyles from "../../../global/globalStyles";

const SeeFlightRoundTrip = ({ item, currency }) => {
  const [departureDate, setDepartureDate] = useState("");
  const [arrivalDate, setArrivalDate] = useState("");

  useEffect(() => {
    let splitDepartureDate;
    let splitArrivalDate;
    if (item.data) {
      if (item.data.departure_date instanceof Date) {
        splitDepartureDate = item.data.departure_date.toString().split(" ");
        splitArrivalDate = item.data.arrival_date.toString().split(" ");
      } else {
        splitDepartureDate = item.data.departure_date
          .toDate()
          .toString()
          .split(" ");
        splitArrivalDate = item.data.arrival_date
          .toDate()
          .toString()
          .split(" ");
      }
    } else {
      if (item.departure_date instanceof Date) {
        splitDepartureDate = item.departure_date.toString().split(" ");
        splitArrivalDate = item.arrival_date.toString().split(" ");
      } else {
        splitDepartureDate = item.departure_date.toDate().toString().split(" ");
        splitArrivalDate = item.arrival_date.toDate().toString().split(" ");
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

    const arrivalDateToShow =
      splitArrivalDate[0] +
      ", " +
      splitArrivalDate[1] +
      " " +
      splitArrivalDate[2] +
      ", " +
      splitArrivalDate[3];

    setDepartureDate(departureDateToShow);
    setArrivalDate(arrivalDateToShow);
  }, [item]);

  return (
    <View style={styles.container}>
      <Text style={styles.headerTextStyle}>Outbound</Text>
      <View style={styles.outerView}>
        <View style={styles.innerView}>
          <View style={styles.dateView}>
            <Text style={styles.dateTextStyle}>{departureDate}</Text>
          </View>

          <TextFromCityToAirport item={item} isFrom={true} />

          <FlightInfoRoundTrip item={item} isFrom={true} />
        </View>
      </View>

      <Text style={styles.headerTextStyle}>Return</Text>
      <View style={styles.outerView}>
        <View style={styles.innerView}>
          <View style={styles.dateView}>
            <Text style={styles.dateTextStyle}>{arrivalDate}</Text>
          </View>

          <TextFromCityToAirport item={item} />

          <FlightInfoRoundTrip item={item} />
        </View>
      </View>

      <View style={{ alignItems: "center" }}>
        <Text style={styles.headerTextStyle}>
          Airline: {item.data ? item.data.airline : item.airline}
        </Text>
        <Text style={styles.headerTextStyle}>
          Ticket price:{" "}
          {item.data
            ? Math.ceil(item.data.ticket_price / currency.rate / 5) * 5
            : Math.ceil(item.ticket_price / currency.rate / 5) * 5}{" "}
          {currency.currency_iso}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.BG_COLOR,
  },
  headerTextStyle: {
    ...globalStyles.boldText,
    ...globalStyles.marginHorizontal,
    fontSize: 24,
    color: colors.BLACK,
    marginTop: 12,
  },
  outerView: {
    ...globalStyles.marginHorizontal,
    borderRadius: 4,
    borderWidth: 1,
    marginTop: 34,
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
  departureTextStyle: {
    ...globalStyles.normalText,
    fontSize: 18,
  },
  arrivalTextStyle: {
    ...globalStyles.boldText,
    fontSize: 20,
  },
});

export default SeeFlightRoundTrip;
