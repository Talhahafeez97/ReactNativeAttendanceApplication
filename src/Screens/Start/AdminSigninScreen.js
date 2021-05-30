import React, { useState } from "react";
import { ImageBackground, View, StyleSheet, ScrollView } from "react-native";
import { Text, Input , Image} from "react-native-elements";
import Spacer from "../../components/Spacer";
import CustomButton from "../../components/CustomButton";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { navigate } from "../../navigationref";
import { faUserCog } from "@fortawesome/free-solid-svg-icons";
import { SafeAreaView } from "react-navigation";

const AdminSigninScreen = () => {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  return (
 
      <View style={styles.container}>
      <Text style={{ fontSize: 60,fontFamily:'Signatra', marginBottom: 35, alignSelf: "center" }}>
       Admin Sign-In</Text>
      <Image style={styles.image1} source={require("../../picture/3.png")}></Image> 
       <View style={styles.inputs}>
        <Input
          label="Enter Username"
          autoCapitalize="none"
          autoCorrect={false}
          value={email}
          onChangeText={setEmail}
        />

        <Input
          secureTextEntry
          label="Enter Password"
          autoCapitalize="none"
          autoCorrect={false}
          value={password}
          onChangeText={setPassword}
        />
        </View>

        <CustomButton
          buttontext="Sign-In"
          onPress={() => adminlogin(email, password)}
        />
      </View>
 
  );
};

const adminlogin = (email, password) => {
  if (email === "a" && password === "a") {
    navigate("Adminmenu");
  } else {
    alert("Invalid User and password");
  }
};
AdminSigninScreen.navigationOptions = { headerShown: false };
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
export default AdminSigninScreen;
