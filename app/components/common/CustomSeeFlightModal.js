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

/**
 * 
 * Object {
  "data": Object {
    "airline": "Italy Airline",
    "arrival_city": Object {
      "airport_name": "Leonardo Da Vinci (Fiumicino)",
      "city_iata_code": "ROM",
      "city_name": "Rome",
      "country_iso2": "IT",
      "country_name": "Italy",
      "geoname_id": "6299619",
      "gmt": "1",
      "iata_code": "FCO",
      "icao_code": "LIRF",
      "latitude": "41.794594",
      "longitude": "12.250346",
      "phone_number": "+39 06-65951",
      "timezone": "Europe/Rome",
    },
    "arrival_date": 2021-06-13T22:55:06.576Z,
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
    "departure_date": 2021-06-11T22:55:06.576Z,
    "outbound": Object {
      "arrival_time": Object {
        "hours": "03",
        "minutes": "25",
      },
      "departure_time": Object {
        "hours": "02",
        "minutes": "10",
      },
      "flight_duration": Object {
        "hours": "01",
        "minutes": "15",
      },
    },
    "return": Object {
      "arrival_time": Object {
        "hours": "19",
        "minutes": "25",
      },
      "departure_time": Object {
        "hours": "18",
        "minutes": "10",
      },
      "flight_duration": Object {
        "hours": "01",
        "minutes": "15",
      },
    },
    "ticket_price": 410,
    "user_token": "[object Object]",
  },
  "id": "lSMgQcWQNtIV8nsMnHl9",
}
 * 
 */

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
        setFlightsModalVisible(true);
      }}
    >
      <View style={styles.headerStyle}>
        <ModalCloseButton
          setModalVisible={() => {
            setSeeFlightModalVisible(false);
            setFlightsModalVisible(true);
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
          {flight.hasOwnProperty("outbound") ? (
            <SeeFlightRoundTrip item={flight} />
          ) : flight.data ? (
            flight.data.hasOwnProperty("outbound") ? (
              <SeeFlightRoundTrip item={flight} />
            ) : (
              <SeeFlightOneWay item={flight} />
            )
          ) : (
            <SeeFlightOneWay item={flight} />
          )}
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
