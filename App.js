import "react-native-gesture-handler";
import React, { useContext, useEffect } from "react";
import { LogBox } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import { Provider as AuthProvider } from "./app/context/AuthContext";
import { Provider as UserProvider } from "./app/context/UserContext";
import { Provider as FlightsProvider } from "./app/context/FlightsContext";
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
      <SplashScreen />
    </NavigationContainer>
  );
};

export default () => {
  return (
    <AuthProvider>
      <FlightsProvider>
        <UserProvider>
          <App />
        </UserProvider>
      </FlightsProvider>
    </AuthProvider>
  );
};
