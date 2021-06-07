import React, { useContext } from "react";
import { StyleSheet, Text } from "react-native";

import Ripple from "react-native-material-ripple";
import Toast from "react-native-simple-toast";

import generatePricesForFlights from "../../functions/generatePricesForFlights";
import { Context as FlightsContext } from "../../context/FlightsContext";

import colors from "../../../global/colors";
import globalStyles from "../../../global/globalStyles";

const ButtonSearchFlights = ({
  whereFromText,
  whereToText,
  isRoundTrip,
  selectedFirstDate,
  selectedSecondDate,
  selectedThirdDate,
  departureCity,
  arrivalCity,
}) => {
  const {
    state: { date },
  } = useContext(FlightsContext);

  const treatAsUTC = (date) => {
    var result = new Date(date);
    result.setMinutes(result.getMinutes() - result.getTimezoneOffset());
    return result;
  };

  const daysBetween = (startDate, endDate) => {
    var millisecondsPerDay = 24 * 60 * 60 * 1000;
    return (treatAsUTC(endDate) - treatAsUTC(startDate)) / millisecondsPerDay;
  };

  const onButtonPress = () => {
    if (whereFromText === "Where from?") {
      Toast.show(
        "'Where from?' field must contain a Country, City or Airport.",
        Toast.LONG
      );
    } else if (whereToText === "Where to?") {
      Toast.show(
        "'Where to?' field must contain a Country, City or Airport.",
        Toast.LONG
      );
    } else {
      let daysBetweenDates;
      if (isRoundTrip) {
        daysBetweenDates = daysBetween(selectedFirstDate, selectedSecondDate);
      } else {
        daysBetweenDates = daysBetween(new Date(), selectedThirdDate);
      }

      const flights = generatePricesForFlights(
        departureCity,
        arrivalCity,
        daysBetweenDates
      );
      if (flights.length === 0) {
        Toast.show("No flights found for these cities!");
      } else {
        Toast.show("Let's goooo!");
        console.log(flights);
      }
    }
  };

  return (
    <Ripple
      rippleColor={colors.WHITE}
      rippleOpacity={0.8}
      rippleContainerBorderRadius={12}
      style={styles.buttonStyle}
      onPress={onButtonPress}
      onLongPress={onButtonPress}
      delayLongPress={150}
    >
      <Text style={styles.titleStyle}>Search Flight</Text>
    </Ripple>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    width: 250,
    height: 40,
    borderRadius: 40,
    backgroundColor: colors.ORANGE,
  },
  titleStyle: {
    ...globalStyles.boldText,
    fontSize: 20,
    color: colors.WHITE,
  },
});

export default ButtonSearchFlights;
