import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import DashedLine from "react-native-dashed-line";

import colors from "../../../global/colors";
import globalStyles from "../../../global/globalStyles";

const FlightInfoOneWay = ({ item }) => {
  const [departureTime, setDepartureTime] = useState("");
  const [arrivalTime, setArrivalTime] = useState("");

  useEffect(() => {
    if (item.data) {
      if (parseInt(item.data.departure_time.hours) < 12) {
        setDepartureTime("AM");
      } else {
        setDepartureTime("PM");
      }

      if (parseInt(item.data.arrival_time.hours) < 12) {
        setArrivalTime("AM");
      } else {
        setArrivalTime("PM");
      }
    } else {
      if (parseInt(item.departure_time.hours) < 12) {
        setDepartureTime("AM");
      } else {
        setDepartureTime("PM");
      }

      if (parseInt(item.arrival_time.hours) < 12) {
        setArrivalTime("AM");
      } else {
        setArrivalTime("PM");
      }
    }
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.outerView}>
        <View style={styles.timeView}>
          <Text style={styles.timeTextStyle}>
            {item.data
              ? item.data.departure_time.hours +
                ":" +
                item.data.departure_time.minutes +
                " " +
                departureTime
              : item.departure_time.hours +
                ":" +
                item.departure_time.minutes +
                " " +
                departureTime}
          </Text>
          <Text style={styles.flightDurationStyle}>
            {item.data
              ? item.data.flight_duration.hours +
                "h " +
                item.data.flight_duration.minutes +
                "m"
              : item.flight_duration.hours +
                "h " +
                item.flight_duration.minutes +
                "m"}
          </Text>
          <Text style={styles.timeTextStyle}>
            {item.data
              ? item.data.arrival_time.hours +
                ":" +
                item.data.arrival_time.minutes +
                " " +
                arrivalTime
              : item.arrival_time.hours +
                ":" +
                item.arrival_time.minutes +
                " " +
                arrivalTime}
          </Text>
        </View>

        <View style={styles.circlesView}>
          <View style={styles.topCircle} />
          <DashedLine
            dashGap={0}
            dashThickness={2}
            axis="vertical"
            style={styles.dashedLineStyle}
          />
          <View style={styles.bottomCircle} />
        </View>

        <View style={styles.airportView}>
          <Text style={[styles.airportTextStyle, styles.topText]}>
            {item.data
              ? item.data.departure_city.airport_name
              : item.departure_city.airport_name}
          </Text>
          <Text style={styles.airportTextStyle}>
            {item.data
              ? item.data.arrival_city.airport_name
              : item.arrival_city.airport_name}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 1,
  },
  outerView: {
    flexDirection: "row",
    margin: 14,
    marginLeft: 16,
    justifyContent: "space-between",
  },
  timeView: {
    justifyContent: "space-between",
  },
  circlesView: {
    marginLeft: 20,
    marginVertical: 4,
  },
  topCircle: {
    width: 16,
    height: 16,
    borderRadius: 20,
    borderWidth: 1,
    backgroundColor: colors.PURPLE,
  },
  dashedLineStyle: {
    height: 44,
    marginLeft: 6,
  },
  bottomCircle: {
    width: 16,
    height: 16,
    borderRadius: 20,
    borderWidth: 1,
    backgroundColor: colors.ORANGE,
  },
  timeTextStyle: {
    ...globalStyles.boldText,
    fontSize: 18,
  },
  flightDurationStyle: {
    ...globalStyles.normalText,
    fontSize: 16,
  },
  airportView: {
    marginHorizontal: 14,
    justifyContent: "space-between",
    width: 170,
  },
  airportTextStyle: {
    ...globalStyles.boldText,
    fontSize: 14,
  },
  topText: {
    marginBottom: 4,
  },
});

export default FlightInfoOneWay;
