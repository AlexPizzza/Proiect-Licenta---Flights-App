import React, { useContext, useState } from "react";
import { Dimensions, Modal, StyleSheet, Text, View } from "react-native";

import { AirbnbRating } from "react-native-elements";
import Ripple from "react-native-material-ripple";

import { Context as UserContext } from "../../../context/UserContext";

import colors from "../../../../global/colors";
import globalStyles from "../../../../global/globalStyles";

const { width, height } = Dimensions.get("window");
const RatingModal = ({ ratingModalVisible, setRatingModalVisible }) => {
  const [rating, setRating] = useState(userRating);

  const {
    state: { userRating },
    addUserRating,
  } = useContext(UserContext);

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        style={styles.container}
        visible={ratingModalVisible}
        onRequestClose={setRatingModalVisible}
      >
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              alignItems: "center",
              width: width * 0.8,
              height: height * 0.4,
              backgroundColor: colors.WHITE,
              borderRadius: 20,
              elevation: 10,
              shadowColor: "#000",
            }}
          >
            <Text style={styles.normalText}>Rate "Flights!" app</Text>
            <AirbnbRating
              count={5}
              reviews={["Terrible", "Bad", "OK", "Good", "Very Good"]}
              defaultRating={userRating}
              size={40}
              onFinishRating={(ratingVal) => {
                setRating(ratingVal);
              }}
            />

            <View
              style={{
                flexDirection: "row",
                marginTop: 38,
              }}
            >
              <Ripple
                rippleColor={colors.WHITE}
                rippleOpacity={0.8}
                rippleContainerBorderRadius={12}
                style={styles.buttonStyle}
                onPress={() => {
                  setRatingModalVisible(false);
                }}
                onLongPress={() => {
                  setRatingModalVisible(false);
                }}
                delayLongPress={150}
              >
                <Text style={styles.buttonTextStyle}>Cancel</Text>
              </Ripple>
              <Ripple
                rippleColor={colors.WHITE}
                rippleOpacity={0.8}
                rippleContainerBorderRadius={12}
                style={[styles.buttonStyle, { marginLeft: 30 }]}
                onPress={() => {
                  addUserRating(rating);
                  setRatingModalVisible(false);
                }}
                onLongPress={() => {
                  addUserRating(rating);
                  setRatingModalVisible(false);
                }}
                delayLongPress={150}
              >
                <Text style={styles.buttonTextStyle}>Ok</Text>
              </Ripple>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    alignItems: "center",
    justifyContent: "center",
    width: 100,
    height: 50,
    borderRadius: 20,
    backgroundColor: colors.ORANGE,
  },
  buttonTextStyle: {
    ...globalStyles.boldText,
    fontSize: 18,
    color: colors.WHITE,
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    margin: 0,
  },
  normalText: {
    ...globalStyles.boldText,
    fontSize: 22,
    marginVertical: 20,
  },
});

export default RatingModal;
