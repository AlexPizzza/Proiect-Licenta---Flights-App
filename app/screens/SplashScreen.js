import React, { useContext, useEffect, useState } from "react";
import { SafeAreaView, View } from "react-native";
import AppLoading from "expo-app-loading";
import { StatusBar } from "expo-status-bar";

import { Context as AuthContext } from "../context/AuthContext";
import { Context as UserContext } from "../context/UserContext";
import { Context as FlightsContext } from "../context/FlightsContext";

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
    getUserRating,
    addCurrencies,
    getCurrentCurrency,
  } = useContext(UserContext);

  const {
    state: {
      exploreEverywhere,
      recommendedCountries,
      popularDestinations,
      quickGetaways,
      longerTrips,
      lastMinute,
      planAhead,
      userCoords,
    },
    getRecommendedCountries,
    getCountriesBySearchType,
    addPriceToCountries,
    getSavedFlights,
    getDate,
    getStatisticsFlights,
  } = useContext(FlightsContext);

  let [fontsLoaded] = useFonts();
  const [locationText] = useLocation();
  const [isLocationTextEmpty, setIsLocationTextEmpty] = useState(true);

  useEffect(() => {
    const getData = async () => {
      await checkIsFirstTime();
      await tryLocalSignIn();
      addCurrencies();
      getDate();
    };
    getData();
  }, []);

  if (!fontsLoaded || isLocationTextEmpty) {
    return (
      <AppLoading
        startAsync={async () => {
          await getRecommendedCountries();
          await getUserRating();
          await getStatisticsFlights();
          getCountriesBySearchType();
          getCurrentCurrency();

          getSavedFlights();
          await Promise.all([new Promise((res) => setTimeout(res, 2000))]);
        }}
        onFinish={() => {
          addUserLocation(locationText);
          setIsLocationTextEmpty(false);

          setTimeout(() => {
            addPriceToCountries(
              exploreEverywhere,
              recommendedCountries,
              popularDestinations,
              quickGetaways,
              longerTrips,
              lastMinute,
              planAhead,
              userCoords
            );
          }, 600);
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
