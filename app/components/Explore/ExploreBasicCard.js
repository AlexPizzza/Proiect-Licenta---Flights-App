import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Ripple from "react-native-material-ripple";

import globalStyles from "../../../global/globalStyles";
import colors from "../../../global/colors";

const ExploreBasicCard = ({ item }) => {
  const navigation = useNavigation();

  const _goToSpecifiedScreen = (title) => {
    navigation.navigate("Recommended", { title });
  };

  return (
    <View style={styles.container}>
      <Ripple
        rippleColor={colors.WHITE}
        rippleOpacity={0.8}
        rippleContainerBorderRadius={8}
        onPress={() => _goToSpecifiedScreen(item.title)}
        onLongPress={() => _goToSpecifiedScreen(item.title)}
        delayLongPress={150}
        style={styles.cardView}
      >
        <Image style={styles.image} source={item.image} />
      </Ripple>
      <View style={styles.textView}>
        <Text style={styles.itemTitle}>{item.title}</Text>
      </View>
    </View>
  );
};

const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...globalStyles.marginHorizontal,
    width: 0.5 * width,
    height: 0.32 * height,
  },
  cardView: {
    flex: 1,
    backgroundColor: "white",
    marginHorizontal: 1,
    marginVertical: 6,
    borderRadius: 8,
    shadowColor: "#000",
    elevation: 6,
  },
  textView: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 0.494 * width,
    height: 0.26 * height,
    borderRadius: 8,
  },
  itemTitle: {
    color: "black",
    marginBottom: 5,
    ...globalStyles.normalText,
  },
  itemDescription: {
    color: "black",
    ...globalStyles.normalText,
  },
});

export default ExploreBasicCard;
