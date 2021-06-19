import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";

import Ripple from "react-native-material-ripple";
import DashedLine from "react-native-dashed-line";

import colors from "../../../global/colors";
import globalStyles from "../../../global/globalStyles";

const { width, height } = Dimensions.get("window");
const FlightCardOneWay = ({
  item,
  setSeeFlightModalVisible,
  setFlightsModalVisible,
  setFlightToShow,
}) => {
  return (
    <View style={styles.container}>
      <Ripple
        rippleColor={colors.PURPLE}
        rippleOpacity={0.8}
        rippleContainerBorderRadius={20}
        onPress={() => {
          setFlightToShow(item);
          setSeeFlightModalVisible(true);
          setFlightsModalVisible(false);
        }}
        onLongPress={() => {
          setFlightToShow(item);
          setSeeFlightModalVisible(true);
          setFlightsModalVisible(false);
        }}
        delayLongPress={150}
        style={styles.cardView}
      >
        <View style={styles.informationStyle}>
          <View style={styles.outboundStyle}>
            <View style={{ flexDirection: "column", marginBottom: 4 }}>
              <Text style={styles.textDepartureStyle}>
                {item.departure_city.city_iata_code
                  ? item.departure_city.city_iata_code
                  : item.departure_city.iata_code}
              </Text>

              <Text style={styles.cityTextStyle}>
                {item.departure_city.city_name}
              </Text>

              <Text style={styles.timeStyle}>
                {item.departure_time.hours}:{item.departure_time.minutes}{" "}
                {parseInt(item.departure_time.hours) < 12 ? "AM" : "PM"}
              </Text>
            </View>

            <View
              style={{
                flexDirection: "column",
                marginBottom: 4,
                marginLeft: 4,
              }}
            >
              <Text style={styles.textArrivalStyle}>
                {item.arrival_city.city_iata_code
                  ? item.arrival_city.city_iata_code
                  : item.arrival_city.iata_code}
              </Text>

              <Text style={styles.cityTextStyle}>
                {item.arrival_city.city_name}
              </Text>

              <Text style={styles.timeStyle}>
                {item.arrival_time.hours}:{item.arrival_time.minutes}{" "}
                {parseInt(item.arrival_time.hours) < 12 ? "AM" : "PM"}
              </Text>
            </View>
          </View>

          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: 4,
            }}
          >
            <Text style={styles.flightDurationStyle}>Flight time:</Text>
            <Text style={styles.flightDurationStyle}>
              {item.flight_duration.hours !== "00"
                ? item.flight_duration.hours + "H"
                : null}{" "}
              {item.flight_duration.minutes}M
            </Text>
          </View>
        </View>

        <View style={styles.priceAndAirlineStyle}>
          <DashedLine dashLength={12} dashGap={12} style={{ marginTop: -3 }} />

          <View style={styles.textViewAirline}>
            <Text style={styles.airlineText}>{item.airline}</Text>
          </View>

          <View style={styles.textViewPrice}>
            <Text style={styles.itemPrice}>{item.ticket_price} RON</Text>
          </View>
        </View>
      </Ripple>
      <View>
        <View style={styles.circleLeftStyle}></View>
        <View style={styles.circleRightStyle}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...globalStyles.marginHorizontal,
    width: 0.92 * width,
    height: 0.446 * height,
    marginVertical: 6,
    borderRadius: 22,
    borderWidth: 2,
    borderRadius: 20,
  },
  cardView: {
    flex: 1,
    borderRadius: 20,
    elevation: 4,
  },
  circleLeftStyle: {
    position: "absolute",
    width: 20,
    height: 40,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: colors.BLACK,
    bottom: 78,
    left: 0,
    elevation: 4,
  },
  circleRightStyle: {
    position: "absolute",
    width: 20,
    height: 40,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    backgroundColor: colors.BLACK,
    bottom: 78,
    right: 0,
    elevation: 4,
  },
  itemPrice: {
    color: colors.BLACK,
    marginBottom: 5,
    ...globalStyles.boldText,
    fontSize: 20,
  },
  airlineText: {
    color: colors.BLACK,
    marginBottom: 5,
    ...globalStyles.boldText,
    fontSize: 20,
  },
  textDepartureStyle: {
    ...globalStyles.boldText,
    fontSize: 26,
    color: colors.PURPLE,
  },
  flightDurationStyle: {
    ...globalStyles.boldText,
    fontSize: 24,
    color: colors.BLACK,
  },
  textArrivalStyle: {
    ...globalStyles.boldText,
    fontSize: 26,
    color: colors.ORANGE,
  },
  cityTextStyle: {
    ...globalStyles.normalText,
    fontSize: 18,
    color: colors.SEARCH_INPUT_TEXT,
  },
  timeStyle: {
    ...globalStyles.boldText,
    fontSize: 22,
    color: colors.BLACK,
  },
  textViewPrice: {
    position: "absolute",
    bottom: 10,
    margin: 4,
    right: 8,
  },
  textViewAirline: {
    position: "absolute",
    bottom: 10,
    margin: 4,
    left: 8,
    width: 160,
  },
  outboundStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 8,
  },
  informationStyle: {
    height: 0.3 * height,
    borderRadius: 18,
    padding: 8,
    paddingHorizontal: 20,
    backgroundColor: colors.WHITE,
  },
  priceAndAirlineStyle: {
    backgroundColor: colors.WHITE,
    borderRadius: 18,
    height: 0.14 * height,
  },
});

export default FlightCardOneWay;
