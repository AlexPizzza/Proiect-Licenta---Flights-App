import React, { useState, useContext } from "react";
import {
  Dimensions,
  Image,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { Button, Input, Text } from "react-native-elements";
import AsyncStorage from "@react-native-async-storage/async-storage";

import colors from "../../../global/colors";
import globalStyles from "../../../global/globalStyles";

import authImage from "../../../assets/auth.jpg";

import { Context as AuthContext } from "../../context/AuthContext";

const { width, height } = Dimensions.get("window");

const SignInScreen = ({ navigation }) => {
  const { signin } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />

      <View style={{ backgroundColor: colors.BG_COLOR }}>
        <View style={styles.imageContainer}>
          <Image style={styles.imageStyle} source={authImage} />
        </View>
      </View>

      <View style={styles.imageAndFormContainer}>
        <Image
          style={[
            styles.imageStyle,
            {
              ...StyleSheet.absoluteFillObject,
              transform: [{ rotateX: "180deg" }],
              height: height * 0.18,
            },
          ]}
          source={authImage}
        />

        <View style={styles.formContainer}>
          <Text h2>Welcome back</Text>
          <Text h3>Use your credentials below and login to your account</Text>
          <Input
            placeholder="Enter your email"
            autoCapitalize="none"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <Input
            placeholder="Enter your password"
            secureTextEntry
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <Button
            title="Log into your account"
            onPress={() => signin({ email, password })}
          />
          <Button
            title="Async Storage clear"
            onPress={() => {
              const clear = async () => {
                await AsyncStorage.clear();
              };
              clear();
            }}
          />

          <View style={styles.textContainer}>
            <Text>Don't have an account?</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("SignUp")}
              activeOpacity={0.4}
            >
              <Text style={styles.signUpText}> Sign Up here</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.bottomContainer}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: colors.PURPLE,
  },
  formContainer: {
    flex: 1,
    borderRadius: 60,
    borderTopLeftRadius: 0,
    backgroundColor: colors.BG_COLOR,
    paddingHorizontal: globalStyles.marginHorizontal.marginHorizontal,
  },
  imageAndFormContainer: {
    flex: 1,
  },
  imageContainer: {
    width,
    borderBottomLeftRadius: 60,
    overflow: "hidden",
  },
  imageStyle: {
    width,
    height: height * 0.18,
  },
  signUpText: {
    color: colors.BLUE,
  },
  textContainer: {
    flex: 1,
    flexDirection: "row",
  },
});

export default SignInScreen;
