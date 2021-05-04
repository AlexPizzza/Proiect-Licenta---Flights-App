import React, { useContext, useState } from "react";
import { StyleSheet, View } from "react-native";

import { Button, Input } from "react-native-elements";

import { Feather, MaterialIcons } from "@expo/vector-icons";

import WelcomeText from "./WelcomeText";

import { Context as AuthContext } from "../../context/AuthContext";

import colors from "../../../global/colors";
import globalStyles from "../../../global/globalStyles";
import AuthButton from "./AuthButton";

const SignIn = () => {
  const { signin, state } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.formContainer}>
      <WelcomeText
        headerText="Welcome back"
        normalText="Use your credentials below and login to your account"
      />

      <View style={styles.inputsContainer}>
        <Input
          placeholder="Enter your email"
          autoCapitalize="none"
          value={email}
          onChangeText={(text) => setEmail(text)}
          keyboardType="email-address"
          leftIcon={() => (
            <MaterialIcons
              name="email"
              size={24}
              color={colors.FOOTER}
              style={{ marginRight: 4 }}
            />
          )}
          errorStyle={[globalStyles.normalText, styles.errorMessage]}
          errorMessage={state.errorMessage}
        />
        <Input
          placeholder="Enter your password"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
          leftIcon={() => (
            <Feather
              name="lock"
              size={24}
              color={colors.FOOTER}
              style={{ marginRight: 4 }}
            />
          )}
        />
      </View>

      {/* <View style={styles.buttonContainer}>
        <Button
          title="Log into your account"
          onPress={() => signin({ email, password })}
        />
      </View> */}

      <AuthButton authText="signin" email={email} password={password} />
    </View>
  );
};

const styles = StyleSheet.create({
  errorMessage: {
    color: "red",
    fontSize: 16,
  },
  formContainer: {
    flex: 5,
    borderRadius: 60,
    borderTopLeftRadius: 0,
    backgroundColor: colors.BG_COLOR,
    paddingHorizontal: globalStyles.marginHorizontal.marginHorizontal,
  },
  inputsContainer: {
    flex: 2,
  },
});

export default SignIn;
