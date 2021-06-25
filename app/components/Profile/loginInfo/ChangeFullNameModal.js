import React, { useEffect, useState } from "react";
import { Dimensions, Modal, StyleSheet, Text, View } from "react-native";
import { Input } from "react-native-elements";

import { auth } from "../../../config/firebase";

import Ripple from "react-native-material-ripple";

import colors from "../../../../global/colors";
import globalStyles from "../../../../global/globalStyles";

const { width, height } = Dimensions.get("window");
const ChangeFullNameModal = ({
  fullNameModalVisible,
  setFullNameModalVisible,
  setFullName,
}) => {
  const changeAuthDisplayFullName = async (fullName) => {
    await auth.currentUser.updateProfile({
      displayName: fullName,
    });
  };

  const [fullNameModal, setFullNameModal] = useState("");

  useEffect(() => {
    if (auth.currentUser.displayName) {
      setFullNameModal(auth.currentUser.displayName);
    }
  }, []);

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        style={styles.container}
        visible={fullNameModalVisible}
        onRequestClose={setFullNameModalVisible}
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
            <Text style={styles.normalText}>Change Full Name</Text>

            <Input
              placeholder="Enter your full name"
              autoCapitalize="words"
              value={fullNameModal}
              onChangeText={(text) => {
                setFullNameModal(text);
              }}
              keyboardType="default"
              containerStyle={{
                width: width * 0.7,
                marginTop: 20,
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
                  setFullNameModalVisible(false);
                }}
                onLongPress={() => {
                  setFullNameModalVisible(false);
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
                  changeAuthDisplayFullName(fullNameModal);
                  if (fullNameModal === "") {
                    setFullName("Currently no name was added");
                  } else {
                    setFullName(fullNameModal);
                  }
                  setFullNameModalVisible(false);
                }}
                onLongPress={() => {
                  changeAuthDisplayFullName(fullNameModal);
                  setFullName(fullNameModal);
                  setFullNameModalVisible(false);
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

export default ChangeFullNameModal;
