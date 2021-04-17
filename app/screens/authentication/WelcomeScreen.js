import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Button } from "react-native-elements";

const WelcomeScreen = ({ navigation }) => {
  return (
    <View>
      <Button
        TouchableComponent={TouchableOpacity}
        activeOpacity={0.8}
        title="Get started"
        onPress={() => navigation.navigate("SignUp")}
      />
      <Button
        TouchableComponent={TouchableOpacity}
        activeOpacity={0.8}
        title="Sign in"
        onPress={() => navigation.navigate("SignIn")}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default WelcomeScreen;
