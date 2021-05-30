import React, { useContext } from "react";
import { ImageBackground, View, Text,Image, StyleSheet } from "react-native";
import { NavigationEvents } from "react-navigation";
import { Context as AuthContext } from "../../context/AuthContext";
import { Entypo } from "@expo/vector-icons";
import AuthForm1 from "../../components/AuthForm1";

const SignupScreen = ({}) => {
  const { state, signup, clearErrorMessage } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <NavigationEvents onWillBlur={clearErrorMessage} />
      <Text style={{ fontSize: 60,fontFamily:'Signatra', marginBottom: 35, alignSelf: "center" }}>
       Enroll New Student</Text>
      <Image style={styles.image1} source={require("../../picture/1.png")}></Image> 
      <AuthForm1
        headerText="Signup for SEI"
        errorMessage={state.errorMessage}
        submitButtonText="Sign-Up"
        onSubmit={signup}
      />
    </View>
  );
};
SignupScreen.navigationOptions = { headerShown: false };
const styles = StyleSheet.create({
  text: {
    fontSize: 40,
    alignSelf: "center",
  },
  container: {
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  },
  image1: {
    alignSelf:"center",
    height: 250,
    width: 250,
    marginBottom:40,
    resizeMode: "stretch",
  },
  icon: {
    alignSelf: "center",
    color: "#03254c",
  },
  inputs:{
    width:300,
  },
});
export default SignupScreen;
