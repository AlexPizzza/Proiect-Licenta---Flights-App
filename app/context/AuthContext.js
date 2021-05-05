import createDataContext from "./createDataContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { auth } from "../config/firebase";

const authReducer = (state, action) => {
  switch (action.type) {
    case "add_email_error":
      return { ...state, emailError: action.payload };
    case "add_password_error":
      return { ...state, passwordError: action.payload };
    case "signin":
      return { token: action.payload, emailError: "", passwordError: "" };
    case "signout":
      return { token: action.payload, emailError: "", passwordError: "" };
    case "clear_error_message":
      return { ...state, emailError: "", passwordError: "" };
    default:
      return state;
  }
};

const signup = (dispatch) => async ({ email, password }) => {
  try {
    const authUser = await auth.createUserWithEmailAndPassword(email, password);
    const token = authUser.user.getIdToken().toString();
    await AsyncStorage.setItem("token", token);
    dispatch({ type: "signin", payload: token });
    navigation.navigate("SignIn");
  } catch (error) {
    dispatch({ type: "add_error", payload: error.message });
  }
};

const signin = (dispatch) => async ({ email, password }) => {
  try {
    const authUser = await auth.signInWithEmailAndPassword(email, password);
    const token = authUser.user.getIdToken().toString();
    await AsyncStorage.setItem("token", token);
    dispatch({ type: "signin", payload: token });
  } catch (error) {
    if (error.message.toLowerCase().includes("email"))
      dispatch({ type: "add_email_error", payload: error.message });
    if (error.message.toLowerCase().includes("password"))
      dispatch({ type: "add_password_error", payload: error.message });
  }
};

const signout = (dispatch) => async () => {
  try {
    await auth.signOut();
    await AsyncStorage.removeItem("token");
    dispatch({ type: "signout" });
  } catch (error) {
    dispatch({ type: "add_error", payload: error.message });
  }
};

const tryLocalSignIn = (dispatch) => async () => {
  const token = await AsyncStorage.getItem("token");
  if (token) {
    dispatch({ type: "signin", payload: token });
  }
};

const clearErrorMessage = (dispatch) => () => {
  dispatch({ type: "clear_error_message" });
};

export const { Context, Provider } = createDataContext(
  authReducer,
  { signup, signin, signout, tryLocalSignIn, clearErrorMessage },
  {
    token: "",
    emailError: "",
    passwordError: "",
  }
);
