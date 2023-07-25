import { View, Text } from "react-native";
import React from "react";
import Home from "../components/Home/Home";
import BottomNavigation from "../components/BottomNavigation";

const HomeScreen = () => {
	return (
		<View>
			<Home />
			<Text>HomeScreen</Text>
		</View>
	);
};

export default HomeScreen;
