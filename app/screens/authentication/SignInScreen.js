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

import SignIn from "../../components/Authentication/SignIn";
import CustomImage from "../../components/Authentication/CustomImage";

const SignInScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />

      <Header image={authImage} />

      <View style={styles.imageAndFormContainer}>
        <CustomImage image={authImage} />

        <KeyboardAvoidingView style={{ flex: 5 }} behavior="height">
          <SignIn />
        </KeyboardAvoidingView>

        <Footer
          basicText="Don't have an account?"
          authText="Sign Up Here"
          screenName="SignUp"
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
    borderTopLeftRadius: 60,
  },
});

export default SignInScreen;
