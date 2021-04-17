import { StyleSheet, Platform, StatusBar } from "react-native";

const globalStyles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  boldText: {
    fontSize: 18,
    fontFamily: "nunito-bold",
  },
  headerBoldText: {
    fontSize: 24,
    fontFamily: "nunito-bold",
  },
  headerText: {
    fontSize: 24,
    fontFamily: "nunito-regular",
  },
  labelText: {
    fontSize: 12,
  },
  normalText: {
    fontSize: 18,
    fontFamily: "nunito-regular",
  },
  marginHorizontal: {
    marginHorizontal: 16,
  },
});

export default globalStyles;
