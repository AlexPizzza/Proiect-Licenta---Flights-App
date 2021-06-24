import React, { useContext, useState } from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";

import Ripple from "react-native-material-ripple";

import CustomSearchFlightsModal from "../../components/common/CustomSearchFlightsModal";

import { Context as FlightsContext } from "../../context/FlightsContext";

import colors from "../../../global/colors";
import globalStyles from "../../../global/globalStyles";

const CityCard = ({ item, currency }) => {
  const { addWhereToCity } = useContext(FlightsContext);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <CustomSearchFlightsModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
      <Ripple
        rippleColor={colors.WHITE}
        rippleOpacity={0.8}
        rippleContainerBorderRadius={20}
        onPress={() => {
          addWhereToCity(item);
          setTimeout(() => {
            setModalVisible(true);
          }, 200);
        }}
        onLongPress={() => {
          addWhereToCity(item);
          setTimeout(() => {
            setModalVisible(true);
          }, 200);
        }}
        delayLongPress={150}
        style={styles.cardView}
      >
        <Image style={styles.image} source={{ uri: item.image }} />
        <View style={styles.textViewCountryName}>
          <Text style={styles.itemTitle}>{item.city_name}</Text>
        </View>
        <View style={styles.textViewPrice}>
          <Text style={styles.itemPrice}>
            from {Math.ceil(item.price / currency.rate / 5) * 5}{" "}
            {currency.currency_iso}
          </Text>
        </View>
      </Ripple>
    </View>
  );
};

const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...globalStyles.marginHorizontal,
    width: 0.92 * width,
    height: 0.35 * height,
  },
  cardView: {
    flex: 1,
    backgroundColor: colors.WHITE,
    marginHorizontal: 4,
    marginVertical: 10,
    borderRadius: 20,
    shadowColor: "#000",
    elevation: 10,
  },
  textViewCountryName: {
    position: "absolute",
    bottom: 5,
    margin: 10,
    left: 12,
    width: 160,
  },
  textViewPrice: {
    position: "absolute",
    bottom: 5,
    margin: 10,
    right: 12,
  },
  image: {
    width: 300,
    height: 200,
    borderRadius: 20,
    marginTop: 8,
    alignSelf: "center",
  },
  itemTitle: {
    color: colors.WHITE,
    marginBottom: 5,
    ...globalStyles.headerBoldText,
    fontSize: 20,
  },
  itemPrice: {
    color: colors.WHITE,
    marginBottom: 5,
    ...globalStyles.normalText,
    fontSize: 18,
  },
});

export default CityCard;
