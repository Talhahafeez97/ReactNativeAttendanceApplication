import React from "react";
import { View, StyleSheet, Text } from "react-native";

const RfidDetailAttendance = ({ navigation, route }) => {
  return (
    <View style={styles.containter}>
      <Text style={styles.Text}>id: {navigation.getParam("id")}</Text>
      <Text style={styles.Text}>Name: {navigation.getParam("name")}</Text>
      <Text style={styles.Text}>Date: {navigation.getParam("date")}</Text>

      <View style={styles.time}>
        <Text style={styles.Text}>timein: {navigation.getParam("timein")}</Text>
        <Text style={styles.Text}>
          timeout: {navigation.getParam("timeout")}
        </Text>
      </View>
    </View>
  );
};
RfidDetailAttendance.navigationOptions = {
  title:"",
  headerStyle: {
    backgroundColor: "#FF6D00",
    borderBottomColor: "#ffffff",
    borderBottomWidth: 1,
  },
};
const styles = StyleSheet.create({
  containter: {
    borderWidth: 1,
    paddingHorizontal: 8,
    marginHorizontal: 15,
    marginVertical: 2,
    backgroundColor: "#43C0F9",
  },
  time: {
    position: "absolute",
    alignSelf: "flex-end",
  },
  icon: {
    marginTop: 150,
  },
  Text: {
    fontSize: 18,
    alignItems: "center",
  },
});
export default RfidDetailAttendance;
