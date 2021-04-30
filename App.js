import "react-native-gesture-handler";
import React, { useContext, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";

import { Provider as AuthProvider } from "./app/context/AuthContext";
import { Provider as UserProvider } from "./app/context/UserContext";
import { Context as AuthContext } from "./app/context/AuthContext";
import { Context as UserContext } from "./app/context/UserContext";

import MainTabs from "./app/navigation/MainTabs";
import Authentication from "./app/navigation/stacks/AuthenticationStack";

import globalStyles from "./global/globalStyles";
import WelcomeScreen from "./app/screens/authentication/WelcomeScreen";

const App = () => {
  const { state: authState, tryLocalSignIn } = useContext(AuthContext);
  const { state: userState, checkIsFirstTime } = useContext(UserContext);

  useEffect(() => {
    checkIsFirstTime();
    tryLocalSignIn();
  }, []);

  return (
    <NavigationContainer>
      <StatusBar style="dark" backgroundColor="white" />
      {userState.isFirstTime === null || userState.isFirstTime === true ? (
        <WelcomeScreen />
      ) : authState.token ? (
        <SafeAreaView style={globalStyles.AndroidSafeArea}>
          <MainTabs />
        </SafeAreaView>
      ) : (
        <Authentication />
      )}
    </NavigationContainer>
  );
};

export default () => {
  return (
    <AuthProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </AuthProvider>
  );
};
