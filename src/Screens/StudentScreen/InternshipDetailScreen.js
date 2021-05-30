import React, { useContext } from "react";
import { View, StyleSheet, Text } from "react-native";

import { Context as AuthContext } from "../../context/AuthContext";
const InternshipDetailScreen = ({ navigation, route }) => {
  const { state } = useContext(AuthContext);
  const _id = navigation.getParam("_id");
  const name1 = state.find((n) => n._id === _id);
  return (
    <View style={styles.container}>
      <Text style={{ marginTop:60, fontSize: 60,fontFamily:'Signatra', marginBottom: 10, alignSelf: "center" }}>
      {name1.name}</Text>
      <View style={styles.description}>
      <Text style={{ marginTop:60, fontSize: 28,fontFamily:'boltregular',  alignSelf: "center" }}>
      {name1.description}</Text>
        </View>
    </View>
  );
};
InternshipDetailScreen.navigationOptions = {
  title:"",
  headerStyle: {
    backgroundColor: "#FF6D00",
    borderBottomColor: "#ffffff",
    borderBottomWidth: 3,
  },
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  name: {
    marginHorizontal: 15,
    marginTop: 10,
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  description: {
    padding: 20,
    
    flex: 15,
    margin: 25,
    fontFamily: "boltregular",
    borderRadius: 22,
    backgroundColor: "#FFFFFF",
  },

  Text: {
    fontSize: 20,
    marginHorizontal: 4,
  },
});
export default InternshipDetailScreen;
