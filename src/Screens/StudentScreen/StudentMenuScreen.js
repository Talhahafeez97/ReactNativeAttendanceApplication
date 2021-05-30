import React, { useContext } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { navigate } from "../../navigationref";
import { Context as AuthContext } from "../../context/AuthContext";
import SquareButton from "../../components/SquareButton";
import CustomButton from "../../components/CustomButton";
import Spacer from "../../components/Spacer";
const StudentMenuScreen = (navigation) => {
  const { state, signout } = useContext(AuthContext);
  return (
    <View style={styles.container}>
     <Text style={{ marginTop:60, fontSize: 90,fontFamily:'Signatra', marginBottom: 35, alignSelf: "center" }}>
       Student Menu</Text>

      <SquareButton
        buttontext="View internship"
        ImageURI={require("../../picture/working-man.png")}
        onPress={() => navigate("ListInternship")}
      />
      <SquareButton
        buttontext="View News"
        ImageURI={require("../../picture/notification.png")}
        onPress={() => navigate("ListNews")}
      />
      <SquareButton
        buttontext="RFID Attendance"
        ImageURI={require("../../picture/rfid.png")}
        onPress={() => navigate("RfidAttendance")}
      />
<SquareButton
        buttontext="TimeTable Account"
        ImageURI={require("../../picture/chronometer.png")}
        onPress={() => navigate("TimeTable")}
      />
<Spacer/>
<CustomButton buttontext="Sign-Out" onPress={signout} /> 

    
    </View>
  );
};
StudentMenuScreen.navigationOptions = { headerShown: false };
const styles = StyleSheet.create({
  text: {
    alignSelf: "center",
    fontSize: 48,
  },
  but: {
    marginTop: 5,
    marginHorizontal: 10,
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
export default StudentMenuScreen;
