import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";

const Slide = ({ item }) => {
  const { title, description, image } = item;

  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <Image style={styles.imageStyle} source={image} />
      <Text>{description}</Text>
    </View>
  );
};

const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  imageStyle: {
    width,
    height: undefined,
    aspectRatio: 1,
  },
});

export default Slide;
