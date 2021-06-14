import React, { useContext, useEffect, useState } from "react";
import {
  Dimensions,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Ripple from "react-native-material-ripple";

import { Feather, FontAwesome } from "@expo/vector-icons";

import ButtonGoToProvider from "../modal/ButtonGoToProvider";
import ModalCloseButton from "../modal/ModalCloseButton";

import SeeFlightRoundTrip from "../modal/SeeFlightRoundTrip";
import SeeFlightOneWay from "../modal/SeeFlightOneWay";

import { Context as FlightsContext } from "../../context/FlightsContext";
import { Context as AuthContext } from "../../context/AuthContext";

import colors from "../../../global/colors";
import globalStyles from "../../../global/globalStyles";

const CustomSeeFlightModal = ({
  flightToShow,
  setFlightsModalVisible,
  seeFlightModalVisible,
  setSeeFlightModalVisible,
}) => {
  const {
    state: { savedFlights },
    addFlightToSavedFlights,
    deleteFlightFromSavedFlights,
  } = useContext(FlightsContext);
  const {
    state: { token },
  } = useContext(AuthContext);

  useEffect(() => {
    if (savedFlights.length !== 0) {
      savedFlights.forEach((savedFlight) => {
        if (flightToShow) {
          const flightToCompare = {
            airline: savedFlight.data.airline,
            arrival_city: {
              airport_name: savedFlight.data.arrival_city.airport_name,
              city_name: savedFlight.data.arrival_city.city_name,
            },
            arrival_date: savedFlight.data.arrival_date,
            departure_city: {
              airport_name: savedFlight.data.departure_city.airport_name,
              city_name: savedFlight.data.departure_city.city_name,
            },
            departure_date: savedFlight.data.departure_date,
            outbound: savedFlight.data.outbound,
            return: savedFlight.data.return,
            ticket_price: savedFlight.data.ticket_price,
          };
          const flightToShowWithoutUserToken = {
            airline: flightToShow.airline,
            arrival_city: {
              airport_name: flightToShow.arrival_city.airport_name,
              city_name: flightToShow.arrival_city.city_name,
            },
            arrival_date: flightToShow.arrival_date,
            departure_city: {
              airport_name: flightToShow.departure_city.airport_name,
              city_name: flightToShow.departure_city.city_name,
            },
            departure_date: flightToShow.departure_date,
            outbound: flightToShow.outbound,
            return: flightToShow.return,
            ticket_price: flightToShow.ticket_price,
          };
          if (
            JSON.stringify(flightToCompare) ===
            JSON.stringify(flightToShowWithoutUserToken)
          ) {
            setIsSaveButtonPressed(true);
          }
        }
      });
    }
  }, []);

  const [flight, setFlight] = useState(flightToShow);
  const [isSaveButtonPressed, setIsSaveButtonPressed] = useState(false);

  const onPress = async () => {
    if (!isSaveButtonPressed) {
      const savedFlight = await addFlightToSavedFlights(flight, token);
      setFlight(savedFlight);
      setIsSaveButtonPressed(true);
    } else {
      deleteFlightFromSavedFlights(flight, savedFlights);
      setIsSaveButtonPressed(false);
    }
  };

  return (
    <Modal
      animationType="slide"
      transparent={false}
      style={styles.container}
      visible={seeFlightModalVisible}
      onRequestClose={() => {
        setSeeFlightModalVisible(false);
        if (setFlightsModalVisible) {
          setFlightsModalVisible(true);
        }
      }}
    >
      <View style={styles.headerStyle}>
        <ModalCloseButton
          setModalVisible={() => {
            setSeeFlightModalVisible(false);
            if (setFlightsModalVisible) {
              setFlightsModalVisible(true);
            }
          }}
        />
        <View
          style={{ flexDirection: "row", ...globalStyles.marginHorizontal }}
        >
          <Ripple
            rippleColor={colors.WHITE}
            rippleOpacity={0.8}
            rippleContainerBorderRadius={20}
            style={styles.ripple}
            onPress={onPress}
            onLongPress={onPress}
            delayLongPress={150}
          >
            {isSaveButtonPressed ? (
              <FontAwesome
                name="heart"
                size={26}
                style={{ color: colors.WHITE, marginTop: 3 }}
              />
            ) : (
              <Feather
                name="heart"
                size={26}
                style={{ color: colors.WHITE, marginTop: 3 }}
              />
            )}
          </Ripple>
          <Text style={styles.saveTextStyle}>Save</Text>
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <View style={{ flex: 10 }}>
          {flight ? (
            flight.hasOwnProperty("outbound") ? (
              <SeeFlightRoundTrip item={flight} />
            ) : flight.data ? (
              flight.data.hasOwnProperty("outbound") ? (
                <SeeFlightRoundTrip item={flight} />
              ) : (
                <SeeFlightOneWay item={flight} />
              )
            ) : (
              <SeeFlightOneWay item={flight} />
            )
          ) : null}
        </View>

        <View style={styles.buttonView}>
          <ButtonGoToProvider />
        </View>
      </ScrollView>
    </Modal>
  );
};

const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    width: width,
    backgroundColor: colors.BG_COLOR,
    paddingBottom: 8,
  },
  headerStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: colors.PURPLE,
    paddingBottom: 10,
    elevation: 4,
  },
  ripple: {
    alignItems: "center",
    justifyContent: "center",
    height: 30,
    width: 30,
    marginTop: 10,
    borderRadius: 20,
  },
  saveTextStyle: {
    marginLeft: 8,
    ...globalStyles.boldText,
    fontSize: 22,
    color: colors.WHITE,
    marginTop: 10,
  },
  buttonView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: width,
    height: 60,
    marginTop: 20,
    backgroundColor: colors.GRAY_SUBHEADER_TEXT,
  },
});

export default CustomSeeFlightModal;
