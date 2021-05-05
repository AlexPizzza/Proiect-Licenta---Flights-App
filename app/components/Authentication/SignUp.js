import React, { useContext, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Input } from "react-native-elements";
import { Formik } from "formik";
import * as Yup from "yup";

import { Feather, Ionicons, MaterialIcons } from "@expo/vector-icons";

import WelcomeText from "./WelcomeText";

import globalStyles from "../../../global/globalStyles";
import colors from "../../../global/colors";

import { Context as AuthContext } from "../../context/AuthContext";
import AuthButton from "./AuthButton";

const SignupSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters.")
    .min(8, "Password is too short!")
    .required("No password provided."),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Required"),
});

const SignUp = () => {
  const { state } = useContext(AuthContext);

  return (
    <View style={styles.formContainer}>
      <WelcomeText
        headerText="Create account"
        normalText="Let us know your name, email and password"
      />
      <Formik
        initialValues={{
          fullName: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        // validateOnChange={false}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          // same shape as initial values
          console.log(values);
        }}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <View style={styles.inputsContainer}>
            <Input
              placeholder="Full Name"
              focusable
              autoCapitalize="words"
              value={values.fullName}
              onChangeText={handleChange("fullName")}
              onBlur={handleBlur("fullName")}
              leftIcon={() => (
                <Ionicons
                  name="ios-person"
                  size={24}
                  color={colors.FOOTER}
                  style={{ marginRight: 4 }}
                />
              )}
              errorStyle={[globalStyles.normalText, styles.errorMessage]}
              errorMessage={touched.fullName && errors.fullName}
            />
            <Input
              placeholder="Enter your email"
              autoCapitalize="none"
              value={values.email}
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              leftIcon={() => (
                <MaterialIcons
                  name="email"
                  size={24}
                  color={colors.FOOTER}
                  style={{ marginRight: 4 }}
                />
              )}
              errorStyle={[globalStyles.normalText, styles.errorMessage]}
              errorMessage={
                state.emailError
                // !== ""
                //   ? state.emailError
                //   : touched.email && errors.email
              }
            />
            <Input
              placeholder="Enter your password"
              secureTextEntry
              value={values.password}
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              leftIcon={() => (
                <Feather
                  name="lock"
                  size={24}
                  color={colors.FOOTER}
                  style={{ marginRight: 4 }}
                />
              )}
              errorStyle={[globalStyles.normalText, styles.errorMessage]}
              errorMessage={touched.password && errors.password}
            />
            <Input
              placeholder="Confirm password"
              secureTextEntry
              value={values.confirmPassword}
              onChangeText={handleChange("passwordConfirmation")}
              onBlur={handleBlur("passwordConfirmation")}
              leftIcon={() => (
                <Feather
                  name="lock"
                  size={24}
                  color={colors.FOOTER}
                  style={{ marginRight: 4 }}
                />
              )}
              errorStyle={[globalStyles.normalText, styles.errorMessage]}
              errorMessage={touched.confirmPassword && errors.confirmPassword}
            />

            <AuthButton
              authText="signup"
              fullName={values.fullName}
              email={values.email}
              password={values.password}
            />
          </View>
        )}
      </Formik>
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
