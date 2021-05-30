import React, { useContext } from "react";
import {
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { NavigationEvents } from "react-navigation";
import { Context as AuthContext } from "../../context/AuthContext";
const ViewAttendanceScreen = ({ navigation }) => {
  const { state, getface } = useContext(AuthContext);
  console.log(state.length);
  console.log(state);
  if (state.Mask ? "true" : "false");
  /*const [Attendance, setinternship] = useState([
    {
      id: "0",
      name: "Talha Hafeez",
      date: "25/5/2021",
      timein: "05:37:30",
      timeout: "05:37:55",
      mask: "yes",
    },
    {
      id: "1",
      name: "Hamza Saleem",
      date: "25/5/2021",
      timein: "05:36:34",
      timeout: "05:37:50",
      mask: "yes",
    },
  ]);*/
  return (
    <View>
      <NavigationEvents onWillFocus={getface} />
      <Text style={{ marginTop:60, fontSize: 60,fontFamily:'Signatra', marginBottom: 20, alignSelf: "center" }}>
       Mask Attendance</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item._id}
        data={state}
        renderItem={({ item }) => {
          return (
            <View style={styles.Attendance}>
              <Text style={styles.textStyle}>{item.Name} </Text>
              <Text style={styles.textStyle}>Date In: {item.DateIn}  </Text>
              <Text style={styles.textStyle}>Date Out: {item.DateOut}  </Text>
              <View style={styles.time}>
                <Text style={styles.textStyle}>Mask: {String(item.Mask)}  </Text>

                <Text style={styles.textStyle}>Time Out: {item.TimeOut}  </Text>
                <Text style={styles.textStyle}>Time In: {item.TimeIn}  </Text>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};
ViewAttendanceScreen.navigationOptions = {
  title:"",
  headerStyle: {
    backgroundColor: "#FF6D00",
    borderBottomColor: "#ffffff",
    borderBottomWidth: 3,
  },
};
export default ViewAttendanceScreen;
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
    fontSize: 15,
    fontFamily: "boltregular",
  },
});
