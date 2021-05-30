import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { navigate } from "../../navigationref";

import SquareButton from "../../components/SquareButton";
import CustomButton from "../../components/CustomButton";
import Spacer from "../../components/Spacer";

const AdminMenuScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={{ marginTop:60, fontSize: 90,fontFamily:'Signatra', marginBottom: 35, alignSelf: "center" }}>
       Admin Menu</Text>

      <SquareButton
        buttontext="Add internship"
        ImageURI={require("../../picture/working-man.png")}
        onPress={() => navigate("CreateInternship")}
      />
      <SquareButton
        buttontext="Add News"
        ImageURI={require("../../picture/notification.png")}
        onPress={() => navigate("CreateNews")}
      />
      <SquareButton
        buttontext="Check Attendance"
        ImageURI={require("../../picture/attednace.png")}
        onPress={() => navigate("ViewAttendance")}
      />
      <SquareButton
        buttontext="Rfid Attendance"
        ImageURI={require("../../picture/rfid.png")}
        onPress={() => navigate("RfidAttendance")}
      />
      <SquareButton
        buttontext="Create Student Account"
        ImageURI={require("../../picture/immigration.png")}
        onPress={() => navigate("Signup")}
      />

      {/* { <SquareButton
        buttontext="TimeTable Account"
        ImageURI={require("../../picture/chronometer.png")}
        onPress={() => navigate("Signup")}
      /> } */}

<Spacer/>
      <CustomButton buttontext="Sign-Out" onPress={() => navigate("Starting")} />
    </View>
  );
};
AdminMenuScreen.navigationOptions = { headerShown: false };
const styles = StyleSheet.create({
  text: {
    fontSize: 48,
    alignSelf: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    opacity: 5,
  },
});
export default AdminMenuScreen;
