import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import MaterialScreen from "../screens/MaterialScreen";
import AttendanceScreen from "../screens/AttendanceScreen";
import UploadScreen from "../screens/UploadScreen";
import BottomNavigation from "../components/BottomNavigation";
import NotificationScreen from "../screens/NotificationScreen";

const Tab = createBottomTabNavigator();

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
				<Tab.Screen
					name="Notification"
					component={NotificationScreen}
					options={{ headerShown: false }}
				/>
			</Tab.Navigator>
		</NavigationContainer>
	);
};

export default AppNavigator;
