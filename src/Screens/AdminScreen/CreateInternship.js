import React, { useContext } from "react";
import { Context as AuthContext } from "../../context/AuthContext";
import Spacer from "../../components/Spacer";
import { NavigationEvents } from "react-navigation";
import { View, TextInput, StyleSheet, Button, Text } from "react-native";
import CustomButton from "../../components/CustomButton";

const UseTextInput = (props) => {
  return (
    <TextInput
      {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
      editable
      maxLength={500}
    />
  );
};

const CreateInternshipScreen = (navigation) => {
  const { state, setinternship, clearErrorMessage } = useContext(AuthContext);
  const [description, setdescription] = React.useState("");
  const [name, setname] = React.useState("");
  return (
    <>
      <NavigationEvents onWillBlur={clearErrorMessage} />
      <Text style={{ marginTop:60, fontSize: 60,fontFamily:'Signatra', marginBottom: 35, alignSelf: "center" }}>
       New Internship</Text>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={setname}
          value={name}
          placeholder="Subject"
          keyboardType="default"
        />

        <View
          style={{
            
            borderWidth: 0.6,
            marginHorizontal: 25,
            marginTop:20,
            borderRadius: 5,
            fontSize: 50,
            marginBottom:40,
          }}
        >
          <UseTextInput
            style={{
              fontSize: 20,
              textAlignVertical: "top",
              marginHorizontal: 5,
              marginBottom: 30,
            }}
            placeholder="Type Decription"
            multiline
            numberOfLines={9}
            onChangeText={setdescription}
            value={description}
          />
        </View>

          {state.errorMessage ? (
            <Text style={styles.errorMessage}>Something Went Wrong</Text>
          ) : null}
          <CustomButton
          buttontext="Enter"
            onPress={() => setinternship({ name, description })}
          />
      </View>
    </>
  );
};
CreateInternshipScreen.navigationOptions = {
  title:"",
  headerStyle: {
    backgroundColor: "#FF6D00",
    borderBottomColor: "#ffffff",
    borderBottomWidth: 3,
  },
};
const styles = StyleSheet.create({
  errorMessage: {
    color: "red",
    fontSize: 16,
    marginLeft: 15,
  },
  input: {
    padding:10,
    height: 40,
    marginHorizontal: 25,
    borderWidth: 0.6,
    borderRadius: 5,
    fontSize: 20,
      },
  text: {
    marginTop: 30,
    fontSize: 34,
    alignSelf: "center",
  },
  container: {
    flex: 1,
  },

  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    opacity: 5,
  },
});
export default CreateInternshipScreen;
