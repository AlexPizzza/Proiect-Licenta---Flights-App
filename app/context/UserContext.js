import createDataContext from "./createDataContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

const userReducer = (state, action) => {
  switch (action.type) {
    case "add_error":
      return { ...state, errorMessage: action.payload };
    case "chkFirstTime":
      return { isFirstTime: action.payload, errorMessage: "" };
    case "clear_error_message":
      return { ...state, errorMessage: "" };
    default:
      return state;
  }
};

const checkIsFirstTime = (dispatch) => async () => {
  try {
    const result = await AsyncStorage.getItem("isFirstTime");

    const isFirstTime = JSON.parse(result);
    console.log(isFirstTime);

    dispatch({ type: "chkFirstTime", payload: isFirstTime });
  } catch (error) {
    dispatch({
      type: "add_error",
      payload: "An error occured while checking if is user first time.",
    });
  }
};

const setValueIsFirstTime = (dispatch) => async (value) => {
  try {
    const isFirstTime = JSON.stringify(value);
    await AsyncStorage.setItem("isFirstTime", isFirstTime);

    dispatch({ type: "chkFirstTime", payload: value });
  } catch (error) {
    dispatch({
      type: "add_error",
      payload: "An error occured while setting isFirstTime to false.",
    });
  }
};

export const { Context, Provider } = createDataContext(
  userReducer,
  { checkIsFirstTime, setValueIsFirstTime },
  {
    isFirstTime: true,
    errorMessage: "",
  }
);
