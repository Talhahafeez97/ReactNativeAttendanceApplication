import React, { useContext } from "react";
import {
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Linking,
} from "react-native";
import { NavigationEvents } from "react-navigation";
import { SocialIcon } from "react-native-elements";
import { Context as AuthContext } from "../../context/AuthContext";

const ListInternshipScreen = ({ navigation }) => {
  const { state, getinternship } = useContext(AuthContext);
  console.log(state.length);

  return (
    <View style={styles.container}>
      <View style={styles.flat}>
        <NavigationEvents onWillFocus={getinternship} />

        <Text style={{ marginTop:60, fontSize: 60,fontFamily:'Signatra', marginBottom: 35, alignSelf: "center" }}>
       Available Internships</Text>
        <FlatList
          data={state}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("InternshipDetail", { _id: item._id })
                }
              >
                <View style={styles.intership}>
                  <Text style={styles.textStyle}>{item.name}</Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
      <View style={styles.icon}>
        <SocialIcon
          type="facebook"
          onPress={() =>
            Linking.openURL("facebook://user?username=reactnative")
          }
        />
        <SocialIcon
          onPress={() =>
            Linking.openURL("instagram://user?username=reactnative")
          }
          type="instagram"
        />
      </View>
    </View>
  );
};

export default ListInternshipScreen;

ListInternshipScreen.navigationOptions = {
 title:"",
  headerStyle: {
    backgroundColor: "#FF6D00",
    borderBottomColor: "#ffffff",
    borderBottomWidth: 1,
  },
};
const styles = StyleSheet.create({
  flat: {
    flex: 8,
  },
  intership: {
    marginHorizontal: 25,
    marginTop:10,
    padding:25,
    shadowColor: "black",
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "flex-start",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
  },
  container: {
    backgroundColor: "#F1F1F1",
    flex: 1,
  },
  textStyle: {
    fontSize: 20,
    alignSelf: "flex-start",
    fontFamily: "boltregular",
    marginLeft: 10,
  },
  icon: {
    justifyContent: "center",
    flexDirection: "row",
    flex: 1,
  },
});
