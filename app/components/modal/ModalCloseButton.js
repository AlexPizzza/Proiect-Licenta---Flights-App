import React from "react";
import { StyleSheet } from "react-native";
import Ripple from "react-native-material-ripple";
import { AntDesign } from "@expo/vector-icons";

import colors from "../../../global/colors";
import globalStyles from "../../../global/globalStyles";

const ModalCloseButton = ({
  isLocationModal,
  setModalVisible,
  setLocationModalVisible,
  clearLocations,
}) => {
  const closeModal = () => {
    setTimeout(() => {
      isLocationModal
        ? (setLocationModalVisible(false), setModalVisible(true))
        : setModalVisible(false);
    }, 150);
    if (clearLocations) {
      clearLocations();
    }
  };

  return (
    <Ripple
      rippleColor={colors.WHITE_SMOKE}
      rippleOpacity={0.8}
      rippleContainerBorderRadius={10}
      style={styles.closeButtonStyle}
      onPress={() => closeModal()}
      onLongPress={() => closeModal()}
      delayLongPress={200}
    >
      <AntDesign name="close" size={40} color="black" />
    </Ripple>
  );
};

const styles = StyleSheet.create({
  closeButtonStyle: {
    marginTop: globalStyles.AndroidSafeArea.paddingTop / 2,
    ...globalStyles.marginHorizontal,
    height: 40,
    width: 40,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ModalCloseButton;
