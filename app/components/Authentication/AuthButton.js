import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { Button } from "react-native-elements";
import colors from "../../../global/colors";

import { Context as AuthContext } from "../../context/AuthContext";
import { Context as FlightsContext } from "../../context/FlightsContext";

const AuthButton = ({ authText, email, password, confirmPassword, style }) => {
  const { signin, signup } = useContext(AuthContext);
  const { getSavedFlights } = useContext(FlightsContext);

  return (
    <View style={[styles.buttonContainer, style]}>
      <Button
        buttonStyle={styles.buttonStyle}
        title={
          authText === "signin"
            ? "Log into your account"
            : authText === "signup"
            ? "Sign Up"
            : ""
        }
        onPress={
          authText === "signin"
            ? async () => {
                signin({ email, password }, getSavedFlights);
              }
            : authText === "signup"
            ? async () => {
                signup({ email, password, confirmPassword });
              }
            : null
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: { flex: 1, alignItems: "center" },
  buttonStyle: {
    width: 250,
    borderRadius: 40,
    backgroundColor: colors.ORANGE,
  },
});

export default AuthButton;
