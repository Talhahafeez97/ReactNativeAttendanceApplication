import React from "react";
import { useFonts } from 'expo-font';
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import * as Font from 'expo-font';
import { setNavigator } from "./src/navigationref";
import { Provider as AuthProvider } from "./src/context/AuthContext";
import StartingScreen from "./src/Screens/Start/StartingScreen";
import StudentSigninScreen from "./src/Screens/Start/StudentSigninScreen";
import SignupScreen from "./src/Screens/AdminScreen/SignupScreen";
import StudentMenuScreen from "./src/Screens/StudentScreen/StudentMenuScreen";
import LoadingScreen from "./src/Screens/LoadingScreen";

import AdminMenuScreen from "./src/Screens/AdminScreen/AdminMenuScreen";
import AdminSigninScreen from "./src/Screens/Start/AdminSigninScreen";

import CreateInternshipScreen from "./src/Screens/AdminScreen/CreateInternship";
import ListInternshipScreen from "./src/Screens/StudentScreen/ListIntershipScreen";
import CreateNewsScreen from "./src/Screens/AdminScreen/CreateNewsScreen";
import ListNewsScreen from "./src/Screens/StudentScreen/ListNewsScreen";
import NewsDetailScreen from "./src/Screens/StudentScreen/NewsDetailScreen";
import InternshipDetailScreen from "./src/Screens/StudentScreen/InternshipDetailScreen";
import TimeTableScreen from "./src/Screens/StudentScreen/TimeTableScreen";
import ViewAttendanceScreen from "./src/Screens/AdminScreen/ViewAttendanceScreen";

import RfidAttendanceScreen from "./src/Screens/AdminScreen/RfidAttendanceScreen";
const switchNavigator = createSwitchNavigator({
 loading: LoadingScreen,
 Start: createStackNavigator({
    Starting: StartingScreen,
    AdminSignin: AdminSigninScreen,
    StudentSignin: StudentSigninScreen,
  }),
  student: createStackNavigator({
    StudentMenu: StudentMenuScreen,
    ListNews: ListNewsScreen,
    InternshipDetail: InternshipDetailScreen,
    NewsDetail: NewsDetailScreen,
    ListInternship: ListInternshipScreen,
    RfidAttendance: RfidAttendanceScreen,
    TimeTable: TimeTableScreen,
  }),

 admin: createStackNavigator({
    Adminmenu: AdminMenuScreen,
    Signup: SignupScreen,
    RfidAttendance: RfidAttendanceScreen,
    ViewAttendance: ViewAttendanceScreen,
    CreateInternship: CreateInternshipScreen,
    CreateNews: CreateNewsScreen,
    Signup: SignupScreen,
  }),
});
const App = createAppContainer(switchNavigator);
export default () => {
  const [loaded] = useFonts({
    Signatra: require('./assets/fonts/Signatra.ttf'),
    boltregular: require('./assets/fonts/bolt-regular.ttf'),
    boltsemibold: require('./assets/fonts/bolt-semibold.ttf'),
  });
  if (!loaded) {
    return null;
  }
  return (
    <AuthProvider>
      <App
        ref={(navigator) => {
          setNavigator(navigator);
        }}
      />
    </AuthProvider>
  );
};
