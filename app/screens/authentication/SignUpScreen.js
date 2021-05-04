import React from "react";
import {
  KeyboardAvoidingView,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";

import Footer from "../../components/Authentication/Footer";
import Header from "../../components/Authentication/Header";

import colors from "../../../global/colors";

import authImage from "../../../assets/auth.jpg";

import SignUp from "../../components/Authentication/SignUp";
import CustomImage from "../../components/Authentication/CustomImage";

const SignUpScreen = ({ navigation }) => {
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
