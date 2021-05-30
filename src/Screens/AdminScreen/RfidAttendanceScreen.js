import React, { useContext } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { NavigationEvents } from "react-navigation";
import { Context as AuthContext } from "../../context/AuthContext";
const RfidAttendanceScreen = () => {
  const { state, getrfid } = useContext(AuthContext);
  

  return (
    <View>
      <NavigationEvents onWillFocus={getrfid} />
      <Text style={{ marginTop:60, fontSize: 60,fontFamily:'Signatra', marginBottom: 20, alignSelf: "center" }}>
       Attendance List</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item._id}
        data={state}
        renderItem={({ item }) => {
          return (
            <View style={styles.Attendance}>
              <Text style={styles.textStyle}>
                {item.id}. {item.username}
              </Text>

              <View style={styles.time}>
                <Text style={styles.timetext}>Check In : {item.timein}</Text>
                <Text style={styles.timetext}>Check Out :{item.timeout}</Text>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

RfidAttendanceScreen.navigationOptions = {
  title:"",
  headerStyle: {
    backgroundColor: "#FF6D00",
    borderBottomColor: "#ffffff",
    borderBottomWidth: 3,
  },
};

const styles = StyleSheet.create({
  back: {
    backgroundColor: "#F1F1F1",
  },
  Attendance: {
    marginHorizontal: 25,
    marginTop:10,
    padding:20,
    shadowColor: "black",
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "flex-start",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
  },
  time: {
    position: "absolute",
    alignSelf: "flex-end",
  },
  textStyle: {
    color: "#02104F",
    fontSize: 20,
    alignSelf: "flex-start",
    fontFamily: "boltregular",
  },
  timetext: {
    borderRadius: 10,
    marginRight: 10,
    color: "#02104F",
    fontSize: 15,
  },
});
export default RfidAttendanceScreen;
