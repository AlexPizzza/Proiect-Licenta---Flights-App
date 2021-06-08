import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";

import Ripple from "react-native-material-ripple";

import colors from "../../../global/colors";
import globalStyles from "../../../global/globalStyles";

/*
Object {
    "airline": "Romania Airline",
    "arrival_city": Object {
      "airport_name": "John F Kennedy International",
      "city_iata_code": "NYC",
      "city_name": "New York",
      "country_iso2": "US",
      "country_name": "United States",
      "geoname_id": "5122732",
      "gmt": "-5",
      "iata_code": "JFK",
      "icao_code": "KJFK",
      "latitude": "40.642334",
      "longitude": "-73.78817",
      "phone_number": "718-244-4444",
      "timezone": "America/New_York",
    },
    "arrival_date": 2021-06-23T18:40:28.884Z,
    "departure_city": Object {
      "airport_name": "Henri Coanda International",
      "city_iata_code": "BUH",
      "city_name": "Bucharest",
      "country_iso2": "RO",
      "country_name": "Romania",
      "geoname_id": "6301793",
      "gmt": "2",
      "iata_code": "OTP",
      "icao_code": "LROP",
      "latitude": "44.571156",
      "longitude": "26.077063",
      "phone_number": "+4 021-204-10",
      "timezone": "Europe/Bucharest",
    },
    "departure_date": 2021-06-19T18:40:28.884Z,
    "flight_duration": 516.2529063866418,
    "ticket_price": 3379,
  },
 */

const FlightCard = ({ item }) => {
  return (
    <View style={styles.container}>
      <Ripple
        rippleColor={colors.WHITE}
        rippleOpacity={0.8}
        rippleContainerBorderRadius={20}
        onPress={() => {}}
        onLongPress={() => {}}
        delayLongPress={150}
        style={styles.cardView}
      >
        <Text>
          {item.flight_duration.hours}:{item.flight_duration.minutes}
        </Text>
        <Text>{item.airline}</Text>
        <View style={styles.textViewPrice}>
          <Text style={styles.itemPrice}>{item.ticket_price} RON</Text>
        </View>
      </Ripple>
    </View>
  );
};

const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...globalStyles.marginHorizontal,
    width: 0.92 * width,
    height: 0.3 * height,
  },
  cardView: {
    flex: 1,
    backgroundColor: colors.FLIGHTS_CARD_COLOR,
    marginVertical: 10,
    borderRadius: 8,
    padding: 10,
  },
  itemPrice: {
    color: colors.WHITE,
    marginBottom: 5,
    ...globalStyles.normalText,
    fontSize: 18,
  },
  textViewPrice: {
    position: "absolute",
    bottom: 4,
    margin: 4,
    right: 8,
  },
});

export default FlightCard;
