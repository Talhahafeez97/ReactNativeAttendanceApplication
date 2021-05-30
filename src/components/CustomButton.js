import React from "react";
import { Button, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Spacer from "./Spacer";

export default function CustomButton({ onPress, buttontext }) {
  return (
    <View style={{ marginHorizontal: 20 }}>
      <Spacer></Spacer>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.text}>{buttontext}</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  button: {
    borderWidth: 0.6,
    width: 220,
    height: 60,
    alignSelf: "center",
    backgroundColor: "#FF6D00",
    borderColor: "transparent",
    borderRadius: 22,
  },
  text: {
    marginVertical: 15,
    fontSize: 24,
    fontFamily:"boltregular",
    alignSelf: "center",
    color: "white",
  },
});
