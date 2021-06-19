import React from "react";
import { Dimensions, Image, StyleSheet, View } from "react-native";

import colors from "../../../global/colors";
import globalStyles from "../../../global/globalStyles";

const Header = ({ image }) => {
  return (
    <View style={{ backgroundColor: colors.BG_COLOR }}>
      <View style={styles.imageContainer}>
        <Image style={styles.imageStyle} source={image} />
      </View>
    </View>
  );
};

const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  imageContainer: {
    width,
    borderBottomLeftRadius: 60,
    overflow: "hidden",
  },
  imageStyle: {
    width,
    height: height * globalStyles.imageHeightRatio,
  },
});

export default Header;
