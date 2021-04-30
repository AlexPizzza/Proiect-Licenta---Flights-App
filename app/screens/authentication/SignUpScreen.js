import React, { useState, useContext } from "react";
import {
  Dimensions,
  Image,
  StatusBar,
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native";
import { Button, Input, Text } from "react-native-elements";

import colors from "../../../global/colors";
import globalStyles from "../../../global/globalStyles";

import authImage from "../../../assets/auth.jpg";

import { Context as AuthContext } from "../../context/AuthContext";

const { width, height } = Dimensions.get("window");

const SignUpScreen = ({ navigation }) => {
  const { signup } = useContext(AuthContext);

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
          <Text h2>Create account</Text>
          <Text h3>Let us know your name, email and password</Text>
          <Input
            placeholder="Enter your email"
            focusable
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
          <Input placeholder="Confirm password" secureTextEntry />
          <Button
            TouchableComponent={TouchableOpacity}
            activeOpacity={0.8}
            title="Sign up"
            onPress={() => signup({ email, password })}
          />
          <View style={styles.textContainer}>
            <Text>Already have an account?</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("SignIn")}
              activeOpacity={0.4}
            >
              <Text style={styles.signInText}> Login here</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
  signInText: {
    color: colors.BLUE,
  },
  textContainer: {
    flexDirection: "row",
  },
});

export default SignUpScreen;
