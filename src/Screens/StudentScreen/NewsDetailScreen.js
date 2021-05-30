import React, { useContext } from "react";
import { View, StyleSheet, Text, Linking } from "react-native";
import { SocialIcon } from "react-native-elements";
import { Context as AuthContext } from "../../context/AuthContext";
//bahriauniversityofficial
const NewsDetailScreen = ({ navigation, route }) => {
  const { state } = useContext(AuthContext);
  const _id = navigation.getParam("_id");
  const name1 = state.find((n) => n._id === _id);
  return (
    <View>
      <View>
      <Text style={{ marginTop:60, fontSize: 60,fontFamily:'Signatra', marginBottom: 10, alignSelf: "center" }}>
      {name1.name}</Text>
      </View>
      <View style={styles.containter2}>
      <Text style={{ marginTop:60, fontSize: 28,fontFamily:'boltregular',  alignSelf: "center" }}>
      {name1.description}</Text>
      </View>
      <View style={styles.icon}>
        <SocialIcon
          onPress={() =>
            Linking.openURL("https://www.facebook.com/BUKHICAMPUS")
          }
          type="facebook"
        />
        <SocialIcon
          type="instagram"
          onPress={() =>
            Linking.openURL("instagram://user?username=bukcofficial")
          }
        />
      </View>
    </View>
  );
};
NewsDetailScreen.navigationOptions = {
  title:"",
  headerStyle: {
    backgroundColor: "#FF6D00",
    borderBottomColor: "#ffffff",
    borderBottomWidth: 3,
  },
};
const styles = StyleSheet.create({
  
  containter2: {
    padding: 20,
    
    flex: 15,
    margin: 25,
    fontFamily: "boltregular",
    borderRadius: 22,
    backgroundColor: "#FFFFFF",

    paddingBottom: 400,
    backgroundColor: "#FFF",
  },
  icon: {
    alignItems: "flex-end",
    justifyContent: "center",
    flexDirection: "row",
  },
  Text: {
    fontSize: 20,
  },
});
export default NewsDetailScreen;
