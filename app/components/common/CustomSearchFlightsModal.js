import React, { useContext, useEffect, useState } from "react";
import { Modal, StyleSheet, View } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

import ModalCloseButton from "../modal/ModalCloseButton";
import RippleText from "../modal/RippleText";
import SearchBar from "../modal/SearchBar";
import ButtonSearchFlights from "../modal/ButtonSearchFlights";
import CustomSearchLocationModal from "./CustomSearchLocationModal";

import colors from "../../../global/colors";
import globalStyles from "../../../global/globalStyles";

const CustomModal = ({ modalVisible, setModalVisible }) => {
  const [isRoundTrip, setIsRoundTrip] = useState(true);
  const [isRoundtripSelected, setIsRoundtripSelected] = useState(true);
  const [isOnewaySelected, setIsOnewaySelected] = useState(false);

  const [whereFromText, setWhereFromText] = useState("Where from?");
  const [whereToText, setWhereToText] = useState("Where to?");
  const [isWhereFrom, setIsWhereFrom] = useState(false);

  const [departureCity, setDepartureCity] = useState(null);
  const [arrivalCity, setArrivalCity] = useState(null);

  const [locationModalVisible, setLocationModalVisible] = useState(false);

  const [showFirstDatetimePicker, setShowFirstDatimePicker] = useState(false);
  const [showSecondDatetimePicker, setShowSecondDatetimePicker] =
    useState(false);
  const [showThirdDatetimePicker, setShowThirdDatetimePicker] = useState(false);

  const [selectedFirstDate, setSelectedFirstDate] = useState(
    new Date(new Date().getTime() + 1 * 24 * 60 * 60 * 1000)
  );
  const [selectedSecondDate, setSelectedSecondDate] = useState(
    new Date(new Date().getTime() + 2 * 24 * 60 * 60 * 1000)
  );
  const [selectedThirdDate, setSelectedThirdDate] = useState(
    new Date(new Date().getTime() + 1 * 24 * 60 * 60 * 1000)
  );

  const [firstDate, setFirstDate] = useState("");
  const [secondDate, setSecondDate] = useState("");
  const [thirdDate, setThirdDate] = useState("");

  const onChangeFirst = (event, selectedFirstDate) => {
    const currentDate = selectedFirstDate;
    if (event.type == "set") {
      setShowFirstDatimePicker(false);
      setSelectedFirstDate(currentDate);
    } else {
      setShowFirstDatimePicker(false);
    }
  };

  const onChangeSecond = (event, selectedSecondDate) => {
    const currentDate = selectedSecondDate;
    if (event.type == "set") {
      setShowSecondDatetimePicker(false);
      setSelectedSecondDate(currentDate);
    } else {
      setShowSecondDatetimePicker(false);
    }
  };

  const onChangeThird = (event, selectedThirdDate) => {
    const currentDate = selectedThirdDate;
    if (event.type == "set") {
      setShowThirdDatetimePicker(false);
      setSelectedThirdDate(currentDate);
    } else {
      setShowThirdDatetimePicker(false);
    }
  };

  useEffect(() => {
    const firstDateSplit = selectedFirstDate.toString().split(" ");
    setFirstDate(
      firstDateSplit[0] + ", " + firstDateSplit[1] + " " + firstDateSplit[2]
    );
  }, [selectedFirstDate]);

  useEffect(() => {
    const secondDateSplit = selectedSecondDate.toString().split(" ");
    setSecondDate(
      secondDateSplit[0] + ", " + secondDateSplit[1] + " " + secondDateSplit[2]
    );
  }, [selectedSecondDate]);

  useEffect(() => {
    const thirdDateSplit = selectedThirdDate.toString().split(" ");
    setThirdDate(
      thirdDateSplit[0] + ", " + thirdDateSplit[1] + " " + thirdDateSplit[2]
    );
  }, [selectedThirdDate]);

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
              sbText={whereFromText}
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
              sbText={whereToText}
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
                  sbText={firstDate}
                  bdRadius={globalStyles.modalSearchBarBdRadius}
                  marginBottom={globalStyles.modalSearchMarginBottom}
                  onPress={() => {
                    setShowFirstDatimePicker(true);
                  }}
                  isDate={true}
                  isRoundTrip={isRoundTrip}
                />

                <SearchBar
                  sbText={secondDate}
                  bdRadius={globalStyles.modalSearchBarBdRadius}
                  marginBottom={globalStyles.modalSearchMarginBottom}
                  onPress={() => {
                    setShowSecondDatetimePicker(true);
                  }}
                  isDate={true}
                  isRoundTrip={isRoundTrip}
                />
              </View>
            ) : (
              <SearchBar
                sbText={thirdDate}
                bdRadius={globalStyles.modalSearchBarBdRadius}
                marginBottom={globalStyles.modalSearchMarginBottom}
                onPress={() => {
                  setShowThirdDatetimePicker(true);
                }}
                isDate={true}
              />
            )}
            {showFirstDatetimePicker && (
              <DateTimePicker
                value={selectedFirstDate}
                mode="date"
                display="calendar"
                onChange={onChangeFirst}
                minimumDate={
                  new Date(new Date().getTime() + 1 * 24 * 60 * 60 * 1000)
                }
                maximumDate={new Date(2021, 9, 31)}
                onTouchCancel={() => setShowFirstDatimePicker(false)}
              />
            )}

            {showSecondDatetimePicker && (
              <DateTimePicker
                value={selectedSecondDate}
                mode="date"
                display="calendar"
                onChange={onChangeSecond}
                minimumDate={
                  new Date(
                    selectedFirstDate.getTime() + 1 * 24 * 60 * 60 * 1000
                  )
                }
                maximumDate={new Date(2021, 9, 31)}
                onTouchCancel={() => setShowSecondDatetimePicker(false)}
              />
            )}

            {showThirdDatetimePicker && (
              <DateTimePicker
                value={selectedThirdDate}
                mode="date"
                display="calendar"
                onChange={onChangeThird}
                minimumDate={
                  new Date(new Date().getTime() + 1 * 24 * 60 * 60 * 1000)
                }
                maximumDate={new Date(2021, 9, 31)}
                onTouchCancel={() => setShowThirdDatetimePicker(false)}
              />
            )}

            <ButtonSearchFlights
              whereFromText={whereFromText}
              whereToText={whereToText}
              isRoundTrip={isRoundTrip}
              selectedFirstDate={selectedFirstDate}
              selectedSecondDate={selectedSecondDate}
              selectedThirdDate={selectedThirdDate}
              departureCity={departureCity}
              arrivalCity={arrivalCity}
            />
          </View>
        </Modal>
      ) : locationModalVisible ? (
        <CustomSearchLocationModal
          locationModalVisible={locationModalVisible}
          setLocationModalVisible={setLocationModalVisible}
          setModalVisible={setModalVisible}
          isWhereFrom={isWhereFrom}
          whereFromText={whereFromText}
          whereToText={whereToText}
          setWhereFromText={setWhereFromText}
          setWhereToText={setWhereToText}
          setDepartureCity={setDepartureCity}
          setArrivalCity={setArrivalCity}
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
