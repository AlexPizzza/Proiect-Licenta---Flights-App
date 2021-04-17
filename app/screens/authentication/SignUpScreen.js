import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Button, Input, Text } from "react-native-elements";

const SignUpScreen = ({ navigation }) => {
  return (
    <View>
      <Text h2>Create account</Text>
      <Text h3>Let us know your name, email and password</Text>
      <Input placeholder="Enter your email" />
      <Input placeholder="Enter your password" secureTextEntry />
      <Input placeholder="Confirm password" secureTextEntry />
      <Button
        TouchableComponent={TouchableOpacity}
        activeOpacity={0.8}
        title="Sign up"
      />
      <Text>Already have an account? Login here</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SignUpScreen;
