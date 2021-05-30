import React, { useState } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  View,
} from "react-native";
import { Text, Input, Button } from "react-native-elements";
import Spacer from "../components/Spacer";
import CustomButton from "./CustomButton";
const AuthForm1 = ({ headerText, errorMessage, onSubmit, submitButtonText }) => {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  return (
      <View style={styles.inputs}>
        <Input
          label="Username"
          autoCapitalize="none"
          autoCorrect={false}
          value={email}
          onChangeText={setEmail}
        />

        <Input
          style={styles.inputs}
          secureTextEntry
          label="Password"
          autoCapitalize="none"
          autoCorrect={false}
          value={password}
          onChangeText={setPassword}
        />

        {errorMessage ? (
          <Text style={styles.errorMessage}>{errorMessage}</Text>
        ) : null}
      
          <CustomButton
            buttontext="Sign-Up"
            onPress={() => onSubmit({ email, password })}
            title={submitButtonText}
          ></CustomButton>
 
      </View>
  );
};
const styles = StyleSheet.create({
  errorMessage: {
    color: "red",
    fontSize: 16,
    marginLeft: 15,
  },
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
export default AuthForm1;
