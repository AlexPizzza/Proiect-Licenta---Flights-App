import React, { useContext, useEffect } from "react";
import {
  KeyboardAvoidingView,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";

import Footer from "../../components/Authentication/Footer";
import Header from "../../components/Authentication/Header";
import SignUp from "../../components/Authentication/SignUp";
import CustomImage from "../../components/Authentication/CustomImage";

import { Context as AuthContext } from "../../context/AuthContext";

import colors from "../../../global/colors";

import authImage from "../../../assets/auth.jpg";

const SignUpScreen = ({ navigation }) => {
  const { clearEmailErrorMessage, clearPasswordErrorMessage } = useContext(
    AuthContext
  );

  useEffect(() => {
    const unsubscribe = navigation.addListener("blur", () => {
      clearEmailErrorMessage();
      clearPasswordErrorMessage();
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />

      <Header image={authImage} />

      <View style={styles.imageAndFormContainer}>
        <CustomImage image={authImage} />

        <KeyboardAvoidingView style={{ flex: 5 }} behavior="height">
          <SignUp />
        </KeyboardAvoidingView>

        <Footer
          basicText="Already have an account?"
          authText=" Login Here"
          screenName="SignIn"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.FOOTER,
  },
  imageAndFormContainer: {
    flex: 1,
  },
});

export default SignUpScreen;
