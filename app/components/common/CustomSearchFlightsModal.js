import React, { useEffect, useState } from "react";
import { Modal, StyleSheet, View } from "react-native";

import ModalCloseButton from "../modal/ModalCloseButton";
import RippleText from "../modal/RippleText";
import SearchBar from "../modal/SearchBar";

import colors from "../../../global/colors";
import globalStyles from "../../../global/globalStyles";
import ButtonSearchFlights from "../modal/ButtonSearchFlights";

const CustomModal = ({ modalVisible, setModalVisible }) => {
  const [isRoundTrip, setIsRoundTrip] = useState(true);
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const date = new Date().toString();
    console.log(date);

    const dateSplit = date.split(" ");
    setCurrentDate(dateSplit[0] + ", " + dateSplit[1] + " " + dateSplit[2]);
  }, []);

  return (
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
        <RippleText text="ROUNDTRIP" setIsRoundTrip={setIsRoundTrip} />

        <RippleText text="ONE-WAY" setIsRoundTrip={setIsRoundTrip} />
      </View>

      <View style={styles.formStyle}>
        <SearchBar
          sbText="Where from?"
          bdRadius={globalStyles.modalSearchBarBdRadius}
          marginBottom={globalStyles.modalSearchMarginBottom}
          onPress={() => console.log("Modala Where from?")}
          isDeparture={true}
        />

        <SearchBar
          sbText="Where to?"
          bdRadius={globalStyles.modalSearchBarBdRadius}
          marginBottom={globalStyles.modalSearchMarginBottom}
          onPress={() => console.log("Modala Where to?")}
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
