import React, { useContext, useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Button, Input } from "react-native-elements";

import { Ionicons, MaterialIcons } from "@expo/vector-icons";

import WelcomeText from "./WelcomeText";

import globalStyles from "../../../global/globalStyles";
import colors from "../../../global/colors";

import { Context as AuthContext } from "../../context/AuthContext";
import AuthButton from "./AuthButton";

const SignUp = () => {
  const { signup, state } = useContext(AuthContext);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.formContainer}>
      <WelcomeText
        headerText="Create account"
        normalText="Let us know your name, email and password"
      />

      <View style={styles.inputsContainer}>
        <Input
          placeholder="Full Name"
          focusable
          autoCapitalize="none"
          value={fullName}
          onChangeText={(text) => setFullName(text)}
          leftIcon={() => (
            <Ionicons
              name="ios-person"
              size={24}
              color={colors.FOOTER}
              style={{ marginRight: 4 }}
            />
          )}
          errorStyle={[globalStyles.normalText, styles.errorMessage]}
          errorMessage={state.errorMessage}
        />
        <Input
          placeholder="Enter your email"
          autoCapitalize="none"
          value={email}
          onChangeText={(text) => setEmail(text)}
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
        />
        <Input placeholder="Confirm password" secureTextEntry />
      </View>

      {/* <View style={styles.buttonsContainer}>
        <Button
          TouchableComponent={TouchableOpacity}
          activeOpacity={0.8}
          title="Sign up"
          onPress={() => signup({ email, password })}
        />
      </View> */}

      <AuthButton authText="signup" email={email} password={password} />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonsContainer: { flex: 3 },
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
    flex: 9,
  },
});

export default SignUp;
