import React from "react";
import * as Font from 'expo-font';
import { View, StyleSheet, Text ,Image} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import CustomButton from "../../components/CustomButton";
import { faUserGraduate } from "@fortawesome/free-solid-svg-icons";
import { navigate } from "../../navigationref";
import { useFonts } from 'expo-font';
const StartingScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 60,fontFamily:'Signatra',alignSelf: "center" }}>
        Smart Educational 
      </Text>
      <Text style={{ fontSize: 60,fontFamily:'Signatra', marginBottom: 35, alignSelf: "center" }}>
        Institute
      </Text>
      <Image style={styles.image} source={require("../../picture/logo.png")}></Image>
      <CustomButton
        onPress={() => navigate("AdminSignin")}
        buttontext="Admin Sign-In"
      />
      <CustomButton
        onPress={() => navigate("StudentSignin")}
        buttontext="Student Sign-In"
      />
    </View>
  );
};

StartingScreen.navigationOptions = { headerShown: false };
const styles = StyleSheet.create({
  image: {
    alignSelf:"center",
    height: 250,
    width: 250,
    marginBottom:40,
    resizeMode: "stretch",
  },
  button: {
    alignItems: "center",
    marginTop: 15,
  },
  container: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    fontSize: 30,
    color: "white",
  },
  icon: {
    
    alignSelf: "center",
    color: "#03254c",
  },
});

export default StartingScreen;
