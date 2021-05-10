import React from "react";
import {
  Button,
  Dimensions,
  Modal,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Ripple from "react-native-material-ripple";

import colors from "../../../global/colors";
import globalStyles from "../../../global/globalStyles";

const CustomModal = ({ modalVisible, setModalVisible, screen }) => {
  modalVisible ? StatusBar.setHidden(true) : StatusBar.setHidden(false);

  return (
    <Modal
      animationType="slide"
      transparent={false}
      style={styles.container}
      visible={modalVisible}
      onRequestClose={setModalVisible}
    >
      <Text>Custom Modal from {screen}</Text>
      <View style={styles.buttonsStyle}>
        <Ripple
          rippleColor={colors.PURPLE}
          rippleOpacity={0.8}
          rippleContainerBorderRadius={12}
          style={{ padding: 8 }}
          onLongPress={() => {}}
          delayLongPress={150}
        >
          <Text style={styles.viewAll}>ROUNDTRIP</Text>
        </Ripple>
        <Ripple
          rippleColor={colors.PURPLE}
          rippleOpacity={0.8}
          rippleContainerBorderRadius={12}
          style={{ padding: 8 }}
          onLongPress={() => {}}
          delayLongPress={150}
        >
          <Text style={styles.viewAll}>ONE-WAY</Text>
        </Ripple>
      </View>
      <Button onPress={() => setModalVisible(false)} title="Dismiss" />
    </Modal>
  );
};

const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  buttonsStyle: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  container: {
    flex: 1,
    backgroundColor: colors.BG_COLOR,
  },
  viewAll: {
    ...globalStyles.normalText,
    color: colors.ORANGE,
  },
});

export default CustomModal;
