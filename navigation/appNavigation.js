import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import MaterialScreen from "../screens/MaterialScreen";
import AttendanceScreen from "../screens/AttendanceScreen";
import UploadScreen from "../screens/UploadScreen";
import BottomNavigation from "../components/navigator/BottomNavigation";
import NotificationsScreen from "../screens/NotificationsScreen";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        tabBar={(props) => <BottomNavigation {...props} />}
      >
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
          name="Attendance"
          component={AttendanceScreen}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
      {/* <Stack.Navigator>
        <Stack.Screen
          name="Notifications"
          component={NotificationsScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator> */}
    </NavigationContainer>
  );
};

export default AppNavigator;
