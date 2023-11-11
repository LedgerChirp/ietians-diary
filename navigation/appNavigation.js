import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import MaterialScreen from "../screens/MaterialScreen";
import AttendanceScreen from "../screens/AttendanceScreen";
import UploadScreen from "../screens/UploadScreen";
import BottomNavigation from "../components/navigator/BottomNavigation";
import NotificationsScreen from "../screens/NotificationsScreen";
import Notes from "../components/Material/Notes";
import SyllabusScreen from "../screens/SyllabusScreen";
import ScheduleScreen from "../screens/ScheduleScreen";
import MarksheetScreen from "../screens/MarksheetScreen";

import PyqScreen from "../screens/PyqScreen";
import NotesScreen from "../screens/NotesScreen";
import ProfileScreen from "../components/Profile/Profile";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        tabBar={(props) => <BottomNavigation {...props} />}
      >
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Pyq"
          component={PyqScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Syllabus"
          component={SyllabusScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Marksheet"
          component={MarksheetScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Schedule"
          component={ScheduleScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="UploadFile"
          component={UploadScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Material"
          component={MaterialScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Notes"
          component={NotesScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Attendance"
          component={AttendanceScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Notification"
          component={NotificationsScreen}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
