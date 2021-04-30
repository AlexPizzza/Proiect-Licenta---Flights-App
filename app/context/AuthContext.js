import createDataContext from "./createDataContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { auth } from "../config/firebase";

const authReducer = (state, action) => {
  switch (action.type) {
    case "add_error":
      return { ...state, errorMessage: action.payload };
    case "signin":
      return { token: action.payload, errorMessage: "" };
    case "signout":
      return { token: action.payload, errorMessage: "" };
    case "clear_error_message":
      return { ...state, errorMessage: "" };
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
    // console.log(JSON.stringify(token));
    dispatch({ type: "signin", payload: token });
  } catch (error) {
    dispatch({ type: "add_error", payload: error.message });
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

export const { Context, Provider } = createDataContext(
  authReducer,
  { signup, signin, signout, tryLocalSignIn },
  {
    token: "",
    errorMessage: "",
  }
);
