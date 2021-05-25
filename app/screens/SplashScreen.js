import React, { useContext, useEffect, useState } from "react";
import { SafeAreaView, View } from "react-native";
import AppLoading from "expo-app-loading";
import { StatusBar } from "expo-status-bar";

import { Context as AuthContext } from "../context/AuthContext";
import { Context as UserContext } from "../context/UserContext";

import MainTabs from "../navigation/MainTabs";
import Authentication from "../navigation/stacks/AuthenticationStack";
import WelcomeScreen from "./authentication/WelcomeScreen";

import globalStyles from "../../global/globalStyles";

import useFonts from "../hooks/useFonts";
import useLocation from "../hooks/useLocation";

const SplashScreen = () => {
  const { state: authState, tryLocalSignIn } = useContext(AuthContext);
  const {
    state: userState,
    checkIsFirstTime,
    addUserLocation,
  } = useContext(UserContext);

  let [fontsLoaded] = useFonts();
  const [locationText] = useLocation();
  const [isLocationTextEmpty, setIsLocationTextEmpty] = useState(true);

  useEffect(() => {
    checkIsFirstTime();
    tryLocalSignIn();
  }, []);

  if (!fontsLoaded || isLocationTextEmpty) {
    return (
      <AppLoading
        startAsync={async () => {
          await Promise.all([new Promise((res) => setTimeout(res, 2000))]);
        }}
        onFinish={() => {
          addUserLocation(locationText);
          setIsLocationTextEmpty(false);
        }}
        onError={() => {}}
      />
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="dark" backgroundColor="white" />

      {userState.isFirstTime === null || userState.isFirstTime ? (
        <WelcomeScreen />
      ) : authState.token ? (
        <SafeAreaView style={globalStyles.AndroidSafeArea}>
          <MainTabs />
        </SafeAreaView>
      ) : (
        <Authentication />
      )}
    </View>
  );
};

export default SplashScreen;
