import React from "react";
import { StyleSheet, View } from "react-native";
import { Button, Input, Text } from "react-native-elements";

const SignInScreen = ({ navigation }) => {
  return (
    <View>
      <Text h2>Welcome back</Text>
      <Text h3>Use your credentials below and login to your account</Text>
      <Input placeholder="Enter your email" />
      <Input placeholder="Enter your password" secureTextEntry />
      <Button title="Log into your account" />

      <Text>Don't have an account? Sign Up here</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SignInScreen;
