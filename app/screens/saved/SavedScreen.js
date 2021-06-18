import React, { useEffect, useContext, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

import CustomSeeFlightModal from "../../components/common/CustomSeeFlightModal";
import RoundTripCard from "../../components/saved/RoundTripCard";
import OneWayCard from "../../components/saved/OneWayCard";

import { Context as FlightsContext } from "../../context/FlightsContext";

import colors from "../../../global/colors";
import globalStyles from "../../../global/globalStyles";

const list = [
  {
    title: "Zbor 1",
  },
  {
    title: "Zbor 2",
  },
  {
    title: "Zbor 3",
  },
];

const SavedScreen = () => {
  const {
    state: { savedFlights, flightToShow },
    addFlightToShow,
  } = useContext(FlightsContext);
  const [seeFlightModalVisible, setSeeFlightModalVisible] = useState(false);
  const [modalFlight, setModalFlight] = useState(flightToShow);

  const [roundTripFlights, setRoundTripFlights] = useState([]);
  const [oneWayFlights, setOneWayFlights] = useState([]);

  useEffect(() => {
    const getFlights = () => {
      let roundTrip = [];
      let oneWay = [];
      savedFlights.forEach((flight) => {
        if (flight.data.hasOwnProperty("return")) {
          roundTrip.push(flight);
        } else {
          oneWay.push(flight);
        }
      });
      setRoundTripFlights(roundTrip);
      setOneWayFlights(oneWay);
    };
    getFlights();
  }, [savedFlights]);

  useEffect(() => {
    setModalFlight(flightToShow);
  }, [flightToShow]);

  return (
    <View style={styles.container}>
      <CustomSeeFlightModal
        flightToShow={modalFlight}
        setFlightToShow={setModalFlight}
        seeFlightModalVisible={seeFlightModalVisible}
        setSeeFlightModalVisible={setSeeFlightModalVisible}
      />
      <View style={styles.headerContainer}>
        <View style={styles.subHeaderContainer}>
          <Text style={styles.savedFlightsHeaderText}>Saved Flights</Text>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {roundTripFlights.length !== 0 ? (
          <View style={styles.savedFlightsContainer}>
            <Text style={styles.subHeaderTextStyle}>Round trip flights</Text>
            {roundTripFlights.map((item, index) => (
              <RoundTripCard
                key={"key" + index}
                item={item.data}
                onPress={() => {
                  addFlightToShow(item);
                  setSeeFlightModalVisible(true);
                }}
              />
            ))}
          </View>
        ) : null}

        {oneWayFlights.length !== 0 ? (
          <View style={styles.savedFlightsContainer}>
            <Text style={styles.subHeaderTextStyle}>One way flights</Text>
            {oneWayFlights.map((item, index) => (
              <OneWayCard
                key={"key" + index}
                item={item.data}
                onPress={() => {
                  addFlightToShow(item);
                  setSeeFlightModalVisible(true);
                }}
              />
            ))}
          </View>
        ) : null}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.BG_COLOR,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    borderBottomWidth: 1,
  },
  subHeaderContainer: {
    ...globalStyles.marginHorizontal,
    marginBottom: 4,
  },
  savedFlightsHeaderText: {
    ...globalStyles.headerBoldText,
    fontSize: 40,
  },
  savedFlightsContainer: {
    marginVertical: 10,
    ...globalStyles.marginHorizontal,
  },
  subHeaderTextStyle: {
    ...globalStyles.headerBoldText,
    fontSize: 32,
  },
});

export default SavedScreen;
