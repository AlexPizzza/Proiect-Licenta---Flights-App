import React, { useState } from "react";
import { Modal, StyleSheet, Text, View } from "react-native";
import { SearchBar } from "react-native-elements";

import ModalCloseButton from "../modal/ModalCloseButton";

import { Feather } from "@expo/vector-icons";

import colors from "../../../global/colors";
import globalStyles from "../../../global/globalStyles";

const CustomSearchLocation = ({
  locationModalVisible,
  setLocationModalVisible,
  setModalVisible,
  isWhereFrom,
}) => {
  const [locationText, setLocationText] = useState("");

  return (
    <Modal
      animationType="slide"
      transparent={false}
      style={styles.container}
      visible={locationModalVisible}
      onRequestClose={() => {
        setLocationModalVisible(false);
        setModalVisible(true);
      }}
    >
      <View style={{ backgroundColor: colors.PURPLE, paddingBottom: 6 }}>
        <View style={{ flexDirection: "row", alignContent: "center" }}>
          <ModalCloseButton
            isLocationModal={true}
            setModalVisible={setModalVisible}
            setLocationModalVisible={setLocationModalVisible}
          />

          <Text
            style={[
              globalStyles.headerBoldText,
              {
                alignSelf: "center",
                paddingTop: 10,
                color: colors.BLACK,
                fontSize: 30,
              },
            ]}
          >
            {isWhereFrom ? "Where from?" : "Where to?"}
          </Text>
        </View>

        <SearchBar
          placeholder="Country, city or airport"
          placeholderTextColor={colors.SEARCH_INPUT_TEXT}
          platform="android"
          searchIcon={
            <Feather name="search" size={24} color={colors.SEARCH_INPUT_TEXT} />
          }
          containerStyle={styles.containerStyle}
          inputContainerStyle={styles.inputContainerStyle}
          clearIcon={{ color: colors.ORANGE }}
          cancelIcon={{ color: colors.SEARCH_INPUT_TEXT }}
          inputStyle={styles.inputStyle}
          onChangeText={(text) => setLocationText(text)}
          underlineColorAndroid="transparent"
          value={locationText}
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.BG_COLOR,
  },
  containerStyle: {
    backgroundColor: colors.PURPLE,
    ...globalStyles.marginHorizontal,
  },
  inputContainerStyle: {
    backgroundColor: colors.BG_COLOR,
    borderRadius: 10,
  },
  inputStyle: {
    ...globalStyles.normalText,
    color: colors.SEARCH_INPUT_TEXT,
  },
});

export default CustomSearchLocation;
