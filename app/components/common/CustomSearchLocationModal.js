import React, { useContext, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SearchBar } from "react-native-elements";

import ModalCloseButton from "../modal/ModalCloseButton";
import LocationsListItem from "../modal/LocationsListItem";

import { Feather } from "@expo/vector-icons";

import { Context as FlightsContext } from "../../context/FlightsContext";

import colors from "../../../global/colors";
import globalStyles from "../../../global/globalStyles";

const CustomSearchLocation = ({
  locationModalVisible,
  setLocationModalVisible,
  setModalVisible,
  isWhereFrom,
  whereFromText,
  whereToText,
  setWhereFromText,
  setWhereToText,
}) => {
  const [locationText, setLocationText] = useState("");
  const [userIsTyping, setUserIsTyping] = useState(false);

  const {
    state: { locations },
    clearLocations,
    getLocations,
  } = useContext(FlightsContext);

  useState(() => {
    if (isWhereFrom && whereFromText !== "Where from?") {
      setLocationText(whereFromText);
      getLocations(whereFromText);
    } else if (!isWhereFrom && whereToText !== "Where to?") {
      setLocationText(whereToText);
      getLocations(whereToText);
    }
  }, []);

  return (
    <Modal
      animationType="slide"
      transparent={false}
      style={styles.container}
      visible={locationModalVisible}
      onRequestClose={() => {
        clearLocations();
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
            clearLocations={clearLocations}
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
          placeholder={"Country, city or airport"}
          placeholderTextColor={colors.SEARCH_INPUT_TEXT}
          platform="android"
          searchIcon={
            <Feather name="search" size={24} style={styles.iconStyle} />
          }
          containerStyle={styles.containerStyle}
          inputContainerStyle={styles.inputContainerStyle}
          clearIcon={{ color: colors.ORANGE }}
          cancelIcon={{ color: colors.SEARCH_INPUT_TEXT }}
          onCancel={() => {
            setUserIsTyping(false);
          }}
          onClear={() => {
            setUserIsTyping(false);
          }}
          inputStyle={styles.inputStyle}
          onChangeText={(text) => {
            setUserIsTyping(true);
            setLocationText(text);
            if (text.length > 2) {
              getLocations(text);
            }
            if (text.length === 0) {
              clearLocations();
            }
          }}
          underlineColorAndroid="transparent"
          value={locationText}
        />
      </View>

      <View style={{ flex: 1 }}>
        {locations.length === 0 && userIsTyping ? (
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <ActivityIndicator size="large" color={colors.PURPLE} />
          </View>
        ) : (
          <FlatList
            showsVerticalScrollIndicator={false}
            decelerationRat={0.8}
            data={locations}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
              return (
                <LocationsListItem
                  item={item.data}
                  onPress={isWhereFrom ? setWhereFromText : setWhereToText}
                  setLocationModalVisible={setLocationModalVisible}
                  setModalVisible={setModalVisible}
                />
              );
            }}
          />
        )}
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
  iconStyle: {
    color: colors.SEARCH_INPUT_TEXT,
    marginLeft: 6,
  },
  inputContainerStyle: {
    backgroundColor: colors.BG_COLOR,
    borderRadius: 10,
  },
  inputStyle: {
    ...globalStyles.normalText,
    color: colors.SEARCH_INPUT_TEXT,
    marginLeft: 10,
  },
});

export default CustomSearchLocation;
