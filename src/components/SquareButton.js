import React from "react";
import {
  Button,
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import Spacer from "./Spacer";

export default function SquareButton({ onPress, buttontext, ImageURI })
{
  //const [loaded] = Font.useFonts({
    //Signatra: require("C:SEI-FYPFYPassets\fontsSignatra.ttf"),});

  //if (!loaded) {
    //return null;
  //}
  return (
    <View style={{ marginHorizontal: 20, alignItems: "center" }}>
      <Spacer></Spacer>

      <TouchableOpacity
        style={styles.buttonStyle}
        activeOpacity={0.5}
        onPress={onPress}
      >
        <Image source={ImageURI} style={styles.buttonImageIconStyle} />
        <View style={styles.buttonIconSeparatorStyle} />
        <Text style={styles.buttonTextStyle}>{buttontext}</Text>
      </TouchableOpacity>
    </View>
  );
  }
const styles = StyleSheet.create({
  buttonStyle: {
    width: 250,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FF6D00",
    borderWidth: 0.5,
    borderColor: "transparent",
    height: 50,
    padding: 15,
    borderRadius: 5,
    margin: 5,
  },
  buttonImageIconStyle: {
    padding: 10,
    margin: 5,
    height: 35,
    width: 35,
    resizeMode: "stretch",
  },
  buttonTextStyle: {
    color: "#fff",
    marginBottom: 4,
    marginLeft: 10,
  },
  buttonIconSeparatorStyle: {
    backgroundColor: "#fff",
    width: 2,
    height: 30,
  },
});
