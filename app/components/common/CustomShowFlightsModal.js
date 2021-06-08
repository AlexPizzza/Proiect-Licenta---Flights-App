import React from "react";
import {
  FlatList,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import ModalCloseButton from "../modal/ModalCloseButton";

import colors from "../../../global/colors";

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
}) => {
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
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: colors.PURPLE,
          paddingBottom: 6,
        }}
      >
        <View style={{ backgroundColor: colors.PURPLE, paddingBottom: 10 }}>
          <ModalCloseButton
            setModalVisible={() => {
              setFlightsModalVisible(false);
              setModalVisible(true);
            }}
          />
          <View>
            <Text>Ceva text pe aici</Text>
          </View>
        </View>
      </View>

      <ScrollView style={{ flex: 1 }}>
        {flightsToShow && flightsToShow.length !== 0 ? (
          flightsToShow.map((item, index) => (
            <Text key={index} style={{ fontSize: 20, color: colors.BLACK }}>
              {item.airline}
            </Text>
          ))
        ) : (
          <Text>No flights to show :(</Text>
        )}
      </ScrollView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.BG_COLOR,
    paddingBottom: 8,
  },
});

export default CustomShowFlightsModal;
