import "react-native-gesture-handler";
import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";

import { Provider as AuthProvider } from "./app/context/AuthContext";
import { Context as AuthContext } from "./app/context/AuthContext";

import MainTabs from "./app/navigation/MainTabs";
import Authentication from "./app/navigation/stacks/AuthenticationStack";

import globalStyles from "./global/globalStyles";

const App = () => {
  const {
    state: { jwt },
  } = useContext(AuthContext);

  return (
    <NavigationContainer>
      <SafeAreaView style={globalStyles.AndroidSafeArea}>
        <StatusBar style="dark" backgroundColor="white" />
        {!jwt ? <MainTabs /> : <Authentication />}
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default () => {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
};
