import React, { useContext, useEffect } from "react";
import {
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Text,
  Button,
  View,
  Linking,
} from "react-native";
import { NavigationEvents } from "react-navigation";
import { SocialIcon } from "react-native-elements";
import { Context as AuthContext } from "../../context/AuthContext";

const ListNewsScreen = ({ navigation }) => {
  const { state, getnews } = useContext(AuthContext);
  console.log(state.length);

  return (
    <View style={styles.containter}>
      <View style={styles.flat}>
        <NavigationEvents onWillFocus={getnews} />
        <Text style={{ marginTop:60, fontSize: 60,fontFamily:'Signatra', marginBottom: 35, alignSelf: "center" }}>
       Current News</Text>
        <FlatList
          data={state}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("NewsDetail", { _id: item._id })
                }
              >
                <View style={styles.news}>
                  <Text style={styles.textStyle}>{item.name} </Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
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
const styles = StyleSheet.create({
  flat: {
    flex: 5,
  },
  news: {
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
  containter: {
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
    marginBottom: 36,
    flexDirection: "row",
  },
});
ListNewsScreen.navigationOptions = {
title:"",
  headerTintColor: "#ffffff",
  headerStyle: {
    backgroundColor: "#FF6D00",
    borderBottomColor: "#ffffff",
    borderBottomWidth: 1,
  },
};
export default ListNewsScreen;
