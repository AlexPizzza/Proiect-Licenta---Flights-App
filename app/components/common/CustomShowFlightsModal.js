import React, { useEffect, useState } from "react";
import {
  Dimensions,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import ModalCloseButton from "../modal/ModalCloseButton";
import FlightCardRoundTrip from "../modal/FlightCardRoundTrip";
import FlightCardOneWay from "../modal/FlightCardOneWay";

import colors from "../../../global/colors";
import globalStyles from "../../../global/globalStyles";

const { width, height } = Dimensions.get("window");
const CustomShowFlightsModal = ({
  flightsModalVisible,
  setFlightsModalVisible,
  setModalVisible,
  departureCity,
  arrivalCity,
  isRoundTrip,
  selectedFirstDate,
  selectedSecondDate,
  selectedThirdDate,
  flightsToShow,
  setSeeFlightModalVisible,
  setFlightToShow,
}) => {
  const [modalFirstDate, setModalFirstDate] = useState("");
  const [modalSecondDate, setModalSecondDate] = useState("");
  const [modalThirdDate, setModalThirdDate] = useState("");

  useEffect(() => {
    const modalFirstDateSplit = selectedFirstDate.toString().split(" ");
    setModalFirstDate(modalFirstDateSplit[2] + " " + modalFirstDateSplit[1]);
    const modalSecondDateSplit = selectedSecondDate.toString().split(" ");
    setModalSecondDate(modalSecondDateSplit[2] + " " + modalSecondDateSplit[1]);
    const modalThirdDateSplit = selectedThirdDate.toString().split(" ");
    setModalThirdDate(modalThirdDateSplit[2] + " " + modalThirdDateSplit[1]);
  });

  return (
    <Modal
      animationType="slide"
      transparent={false}
      style={styles.container}
      visible={flightsModalVisible}
      onRequestClose={() => {
        setFlightsModalVisible(false);
        setModalVisible(true);
      }}
    >
      <View style={styles.headerStyle}>
        <ModalCloseButton
          setModalVisible={() => {
            setFlightsModalVisible(false);
            setModalVisible(true);
          }}
        />
        {isRoundTrip ? (
          <View style={{ flexDirection: "column" }}>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.headerTextStyle}>
                {departureCity.city_name &&
                departureCity.city_name.includes("(")
                  ? departureCity.city_name.substr(
                      0,
                      departureCity.city_name.indexOf("(")
                    )
                  : departureCity.city_name &&
                    !departureCity.city_name.includes("(")
                  ? departureCity.city_name
                  : departureCity.capital
                  ? departureCity.capital
                  : null}
              </Text>
              <Text style={styles.headerTextStyle}>
                {"  -  "}
                {arrivalCity.city_name && arrivalCity.city_name.includes("(")
                  ? arrivalCity.city_name.substr(
                      0,
                      arrivalCity.city_name.indexOf("(")
                    )
                  : arrivalCity.city_name &&
                    !arrivalCity.city_name.includes("(")
                  ? arrivalCity.city_name
                  : arrivalCity.capital
                  ? arrivalCity.capital
                  : null}
              </Text>
            </View>

            <View style={{ flexDirection: "row" }}>
              <Text style={styles.headerDateTextStyle}>{modalFirstDate}</Text>
              <Text style={styles.headerDateTextStyle}>
                {"  -  "}
                {modalSecondDate}
              </Text>
            </View>
          </View>
        ) : (
          <View style={{ flexDirection: "column" }}>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.headerTextStyle}>
                {departureCity.city_name &&
                departureCity.city_name.includes("(")
                  ? departureCity.city_name.substr(
                      0,
                      departureCity.city_name.indexOf("(")
                    )
                  : departureCity.city_name &&
                    !departureCity.city_name.includes("(")
                  ? departureCity.city_name
                  : departureCity.capital
                  ? departureCity.capital
                  : null}
              </Text>
              <Text style={styles.headerTextStyle}>
                {"  -  "}
                {arrivalCity.city_name && arrivalCity.city_name.includes("(")
                  ? arrivalCity.city_name.substr(
                      0,
                      arrivalCity.city_name.indexOf("(")
                    )
                  : arrivalCity.city_name &&
                    !arrivalCity.city_name.includes("(")
                  ? arrivalCity.city_name
                  : arrivalCity.capital
                  ? arrivalCity.capital
                  : null}
              </Text>
            </View>

            <Text style={styles.headerDateTextStyle}>
              Departure date:{"  "}
              {modalThirdDate}
            </Text>
          </View>
        )}
      </View>

      {flightsToShow && flightsToShow.length !== 0 ? (
        <ScrollView
          style={styles.scrollViewStyle}
          showsVerticalScrollIndicator={false}
        >
          <Text
            style={[
              styles.headerTextStyle,
              {
                color: colors.BLACK,
                ...globalStyles.marginHorizontal,
              },
            ]}
          >
            Flights to{" "}
            {arrivalCity.airport_name ? arrivalCity.airport_name + ", " : null}
            {arrivalCity.city_name}
          </Text>
          {isRoundTrip
            ? flightsToShow.map((item, index) => (
                <FlightCardRoundTrip
                  key={"key" + index}
                  item={item}
                  setFlightsModalVisible={setFlightsModalVisible}
                  setSeeFlightModalVisible={setSeeFlightModalVisible}
                  setFlightToShow={setFlightToShow}
                />
              ))
            : flightsToShow.map((item, index) => (
                <FlightCardOneWay
                  key={"key" + index}
                  item={item}
                  setFlightsModalVisible={setFlightsModalVisible}
                  setSeeFlightModalVisible={setSeeFlightModalVisible}
                  setFlightToShow={setFlightToShow}
                />
              ))}
        </ScrollView>
      ) : (
        <Text>No flights to show :(</Text>
      )}
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    width: width,
    backgroundColor: colors.BG_COLOR,
    paddingBottom: 8,
  },
  headerDateTextStyle: {
    ...globalStyles.normalText,
    fontSize: 20,
    color: colors.WHITE,
  },
  headerStyle: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.PURPLE,
    paddingBottom: 10,
  },
  headerTextStyle: {
    ...globalStyles.boldText,
    fontSize: 22,
    color: colors.WHITE,
    marginTop: 8,
  },
  scrollViewStyle: {
    backgroundColor: colors.WHITE,
  },
});

export default CustomShowFlightsModal;
