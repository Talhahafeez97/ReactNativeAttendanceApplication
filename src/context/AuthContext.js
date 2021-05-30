import AsyncStorage from "@react-native-async-storage/async-storage";
import createDataContext from "./createDataContext";
import Sei from "../api/Sei";
import { navigate } from "../navigationref";
const authReducer = (state, action) => {
  switch (action.type) {
    case "add_error":
      return { ...state, errorMessage: action.payload };
    case "signin":
      return { errorMessage: "", ...state, token: action.payload };
    case "clear_error_message":
      return { ...state, errorMessage: "" };
    case "signout":
      return { token: null, errorMessage: "" };
    case "adminsignin":
      return { errorMessage: "", ...state };
    case "setinternship":
      return { ...state, errorMessage: "" };
    case "getinternship":
      return action.payload;
    case "getrfid":
      return action.payload;
    default:
      return state;
  }
};
const getinternship = (dispatch) => async () => {
  const response = await Sei.get("/internship");
  console.log(response.data);
  dispatch({ type: "getinternship", payload: response.data });
};
const getrfid = (dispatch) => async () => {
  const response = await Sei.get("/rfid");
  console.log(response.data);
  dispatch({ type: "getrfid", payload: response.data });
};
const getface = (dispatch) => async () => {
  const response = await Sei.get("/Face");
  console.log(response.data);
  dispatch({ type: "getinternship", payload: response.data });
};
const clearErrorMessage = (dispatch) => () => {
  dispatch({ type: "clear_error_message" });
};
const getnews = (dispatch) => async () => {
  const response = await Sei.get("/news");
  dispatch({ type: "getinternship", payload: response.data });
  console.log("fetch news data");
};

const trylocalSignin = (dispatch) => async () => {
  const token = await AsyncStorage.getItem("token");
  if (token) {
    dispatch({ type: "signin", payload: token });
    navigate("StudentMenu");
  } else {
    navigate("Start");
  }
};
const signup =
  (dispatch) =>
  async ({ email, password }) => {
    if (email.length < 6 && password.length < 6) {
      alert("email and password must be above 6");
    } else {
      try {
        const response = await Sei.post("/signup", { email, password });
        console.log(response.data);

        await AsyncStorage.setItem("token", response.data.token);
        dispatch({ type: "signin", payload: response.data.token });
        console.log(email, password);
        console.log("signup sucessfully");
        navigate("Adminmenu");
      } catch (err) {
        dispatch({
          type: "add_error",
          payload: "Something went wrong with signup",
        });
      }
    }
  };

const signin = (dispatch) => {
  return async ({ email, password }) => {
    try {
      const response = await Sei.post("/signin", { email, password });
      await AsyncStorage.setItem("token", response.data.token);
      dispatch({ type: "signin", payload: response.data.token });
      console.log("signin successfully");
      navigate("StudentMenu");
    } catch (err) {
      dispatch({
        type: "add_error",
        payload: "Something went wrong with sign in",
      });
    }
  };
};
const signout = (dispatch) => async () => {
  console.log("logout");
  await AsyncStorage.removeItem("token");
  dispatch({ type: "signout" });
  navigate("Starting");
};

const setinternship = (dispatch) => {
  return async ({ name, description }) => {
    if (!name || !description) {
      alert("enter name and description");
    }
    try {
      await Sei.post("/internship", { name, description });

      console.log("update sucessfully");
      dispatch({ type: "setinternship" });
      navigate("Adminmenu");
    } catch (err) {
      console.log("update failed");

      dispatch({
        type: "add_error",
        payload: "something went wrong",
      });
    }
  };
};

const setnews = (dispatch) => {
  return async ({ name, description }) => {
    if (!name || !description) {
      alert("enter name and description");
    }
    try {
      await Sei.post("/news", { name, description });

      console.log("update sucessfullt");
      dispatch({ type: "setinternship" });
      navigate("Adminmenu");
    } catch (err) {
      console.log("update failed");

      dispatch({
        type: "add_error",
        payload: "something went wrong",
      });
    }
  };
};

export const { Provider, Context } = createDataContext(
  authReducer,
  {
    signup,
    signin,
    signout,
    clearErrorMessage,
    trylocalSignin,
    getinternship,
    getnews,
    setinternship,
    setnews,
    getrfid,
    getface,
  },
  { token: null, errorMessage: "" }
);
