import React, { useContext } from "react";
import {
  ImageBackground,
  Text,
  View,Image,
  StyleSheet,
  ScrollView,
} from "react-native";
import { NavigationEvents } from "react-navigation";
import AuthForm from "../../components/AuthForm";
import Spacer from "../../components/Spacer";
import { Context } from "../../context/AuthContext";
import { Entypo } from "@expo/vector-icons";
import { SafeAreaView } from "react-navigation";
const StudentSigninScreen = () => {
  const { state, signin, clearErrorMessage } = useContext(Context);
 
  return (
  
      <View style={styles.container}>
        <NavigationEvents onWillBlur={clearErrorMessage} />
        <Text style={{ fontSize: 60,fontFamily:'Signatra', marginBottom: 35, alignSelf: "center" }}>
       Student Sign-In</Text>
      <Image style={styles.image1} source={require("../../picture/2.png")}></Image> 
        <AuthForm
          errorMessage={state.errorMessage}
          submitButtonText="Sign-In"
          onSubmit={signin}
        />
      </View>

  );
};
StudentSigninScreen.navigationOptions = { headerShown: false };
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
export default StudentSigninScreen;
