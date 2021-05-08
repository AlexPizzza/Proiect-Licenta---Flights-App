import "react-native-gesture-handler";
import React, { useContext, useEffect } from "react";
import { LogBox } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

import { Provider as AuthProvider } from "./app/context/AuthContext";
import { Provider as UserProvider } from "./app/context/UserContext";
import { Context as AuthContext } from "./app/context/AuthContext";
import { Context as UserContext } from "./app/context/UserContext";

import SplashScreen from "./app/screens/SplashScreen";

LogBox.ignoreLogs(["Setting a timer"]);

const App = () => {
  const { tryLocalSignIn } = useContext(AuthContext);
  const { checkIsFirstTime } = useContext(UserContext);

  useEffect(() => {
    checkIsFirstTime();
    tryLocalSignIn();
  }, []);

  return (
    <NavigationContainer>
      {/* <StatusBar style="dark" backgroundColor="white" /> */}
      <SplashScreen />
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
