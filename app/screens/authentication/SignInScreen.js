import React, { useContext, useEffect } from "react";
import {
  KeyboardAvoidingView,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";

import Footer from "../../components/Authentication/Footer";
import Header from "../../components/Authentication/Header";
import CustomImage from "../../components/Authentication/CustomImage";
import SignIn from "../../components/Authentication/SignIn";

import { Context as AuthContext } from "../../context/AuthContext";

import colors from "../../../global/colors";

import authImage from "../../../assets/auth.jpg";

const SignInScreen = ({ navigation }) => {
  const { clearErrorMessage } = useContext(AuthContext);

  useEffect(() => {
    const unsubscribe = navigation.addListener("blur", () => {
      clearErrorMessage();
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
