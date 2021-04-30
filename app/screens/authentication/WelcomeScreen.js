import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";

import Slide from "../../components/Welcome/Slide";
import Button from "../../components/Welcome/Button";

import { Context as UserContext } from "../../context/UserContext";

import colors from "../../../global/colors";

import firstImage from "../../../assets/welcome/1.png";
import secondImage from "../../../assets/welcome/2.png";
import thirdImage from "../../../assets/welcome/3.png";

const slides = [
  {
    key: "1",
    title: "Welcome One",
    description: "Welcome Screen One Description",
    image: firstImage,
  },
  {
    key: "2",
    title: "Welcome Two",
    description: "Welcome Screen Two Description",
    image: secondImage,
  },
  {
    key: "3",
    title: "Welcome Three",
    description: "Welcome Screen Three Description",
    image: thirdImage,
  },
];

const WelcomeScreen = () => {
  const { setValueIsFirstTime } = useContext(UserContext);

  return (
    <View style={styles.container}>
      <AppIntroSlider
        data={slides}
        activeDotStyle={styles.activeDotStyle}
        dotStyle={styles.dotStyle}
        showSkipButton
        showNextButton
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => <Slide item={item} />}
        renderSkipButton={() => <Button title="Skip" />}
        renderNextButton={() => <Button title="Next" />}
        renderDoneButton={() => <Button title="Done" />}
        onDone={() => {
          setValueIsFirstTime(false);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.BG_COLOR,
  },
  activeDotStyle: {
    backgroundColor: colors.PURPLE,
    marginHorizontal: 8,
  },
  dotStyle: {
    backgroundColor: colors.BLACK,
    marginHorizontal: 8,
  },
});

export default WelcomeScreen;
