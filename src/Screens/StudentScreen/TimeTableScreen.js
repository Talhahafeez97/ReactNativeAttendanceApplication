import React from "react";
import { TouchableOpacity } from "react-native";
import {  Image, View, Text,Linking, StyleSheet } from "react-native";

const TimeTableScreen = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() =>
          Linking.openURL(
            "https://drive.google.com/drive/folders/1XI8NV2B8l5yAZj67_42GpAC9sKKx3SC1?usp=sharing"
          )
        }
      >
        <Image style={styles.image} source={require("../../picture/schedule.png")} />
      <Text style={{ marginTop:20, fontSize: 30,fontFamily:'boltsemibold', alignSelf: "center" }}>
       Click To View TimeTable</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: "center",
    alignItems:"center"
  },
  image: {
    alignSelf:"center",
    height: 250,
    width: 250,
  },
});
export default TimeTableScreen;
