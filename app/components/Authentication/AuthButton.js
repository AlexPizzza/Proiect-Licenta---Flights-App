import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { Button } from "react-native-elements";

import { Context as AuthContext } from "../../context/AuthContext";

const AuthButton = ({ authText, email, password }) => {
  const { signin, signup, state } = useContext(AuthContext);
  return (
    <View style={styles.buttonContainer}>
      <Button
        title={
          authText === "signin"
            ? "Log into your account"
            : authText === "signup"
            ? "Sign Up"
            : ""
        }
        onPress={
          authText === "signin"
            ? () => signin({ email, password })
            : authText === "signup"
            ? () => signup({ email, password })
            : null
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: { flex: 2 },
});

export default AuthButton;
