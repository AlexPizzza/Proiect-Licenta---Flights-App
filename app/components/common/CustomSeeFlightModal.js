import React, { useEffect, useState } from "react";
import {
  Dimensions,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import ButtonGoToProvider from "../modal/ButtonGoToProvider";
import ModalCloseButton from "../modal/ModalCloseButton";

import colors from "../../../global/colors";
import globalStyles from "../../../global/globalStyles";

const CustomSeeFlightModal = ({
  flightToShow,
  setFlightsModalVisible,
  seeFlightModalVisible,
  setSeeFlightModalVisible,
}) => {
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
      </View>
      <Text>{flightToShow.departure_city.city_name}</Text>
      <Text>{flightToShow.arrival_city.city_name}</Text>
      <ButtonGoToProvider />
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
    alignItems: "center",
    backgroundColor: colors.PURPLE,
    paddingBottom: 10,
  },
});

export default CustomSeeFlightModal;
