import React, { useContext, useEffect, useState } from "react";
import { Modal, StyleSheet, View } from "react-native";

import ModalCloseButton from "../modal/ModalCloseButton";
import RippleText from "../modal/RippleText";
import SearchBar from "../modal/SearchBar";
import ButtonSearchFlights from "../modal/ButtonSearchFlights";
import CustomSearchLocationModal from "./CustomSearchLocationModal";

import { Context as FlightsContext } from "../../context/FlightsContext";

import colors from "../../../global/colors";
import globalStyles from "../../../global/globalStyles";

const CustomModal = ({ modalVisible, setModalVisible }) => {
  const [isRoundTrip, setIsRoundTrip] = useState(true);
  const [isRoundtripSelected, setIsRoundtripSelected] = useState(true);
  const [isOnewaySelected, setIsOnewaySelected] = useState(false);
  const [currentDate, setCurrentDate] = useState("");
  const [isWhereFrom, setIsWhereFrom] = useState(false);
  const [locationModalVisible, setLocationModalVisible] = useState(false);

  const {
    state: { date },
  } = useContext(FlightsContext);

  useEffect(() => {
    const dateSplit = date.split(" ");
    setCurrentDate(dateSplit[0] + ", " + dateSplit[1] + " " + dateSplit[2]);
  }, []);

  return (
    <View style={styles.container}>
      {modalVisible ? (
        <Modal
          animationType="slide"
          transparent={false}
          style={styles.container}
          visible={modalVisible}
          onRequestClose={setModalVisible}
        >
          <View style={{ backgroundColor: colors.PURPLE, paddingBottom: 10 }}>
            <ModalCloseButton setModalVisible={setModalVisible} />
          </View>

          <View style={styles.buttonsStyle}>
            <RippleText
              text="ROUNDTRIP"
              setIsRoundTrip={setIsRoundTrip}
              onPress={() => {
                setIsRoundtripSelected(true);
                setIsOnewaySelected(false);
              }}
              isRoundtripSelected={isRoundtripSelected}
            />

            <RippleText
              text="ONE-WAY"
              setIsRoundTrip={setIsRoundTrip}
              onPress={() => {
                setIsRoundtripSelected(false);
                setIsOnewaySelected(true);
              }}
              isOnewaySelected={isOnewaySelected}
            />
          </View>

          <View style={styles.formStyle}>
            <SearchBar
              sbText="Where from?"
              bdRadius={globalStyles.modalSearchBarBdRadius}
              marginBottom={globalStyles.modalSearchMarginBottom}
              onPress={() => {
                setIsWhereFrom(true);
                setLocationModalVisible(true);
                setModalVisible(false);
              }}
              isDeparture={true}
            />

            <SearchBar
              sbText="Where to?"
              bdRadius={globalStyles.modalSearchBarBdRadius}
              marginBottom={globalStyles.modalSearchMarginBottom}
              onPress={() => {
                setIsWhereFrom(false);
                setLocationModalVisible(true);
                setModalVisible(false);
              }}
              isDeparture={false}
            />

            {isRoundTrip ? (
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                }}
              >
                <SearchBar
                  sbText={currentDate}
                  bdRadius={globalStyles.modalSearchBarBdRadius}
                  marginBottom={globalStyles.modalSearchMarginBottom}
                  onPress={() => console.log("Modala Date")}
                  isDate={true}
                  isRoundTrip={isRoundTrip}
                />

                <SearchBar
                  sbText={currentDate}
                  bdRadius={globalStyles.modalSearchBarBdRadius}
                  marginBottom={globalStyles.modalSearchMarginBottom}
                  onPress={() => console.log("Modala Date")}
                  isDate={true}
                  isRoundTrip={isRoundTrip}
                />
              </View>
            ) : (
              <SearchBar
                sbText={currentDate}
                bdRadius={globalStyles.modalSearchBarBdRadius}
                marginBottom={globalStyles.modalSearchMarginBottom}
                onPress={() => console.log("Modala Date")}
                isDate={true}
              />
            )}

            <ButtonSearchFlights />
          </View>
        </Modal>
      ) : locationModalVisible ? (
        <CustomSearchLocationModal
          locationModalVisible={locationModalVisible}
          setLocationModalVisible={setLocationModalVisible}
          setModalVisible={setModalVisible}
          isWhereFrom={isWhereFrom}
        />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  buttonsStyle: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
  },
  container: {
    backgroundColor: colors.BG_COLOR,
    paddingBottom: 8,
  },
  formStyle: {
    paddingVertical: 10,
  },
});

export default CustomModal;
