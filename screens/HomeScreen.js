import { View, Text } from "react-native";
import React from "react";
import Home from "../components/Home/Home";
import Header from "../components/Header/Header";
// import BottomNavigation from "../components/navigator/BottomNavigation";

const HomeScreen = () => {
	return (
		<View className="bg-white">
			<Header />
			<View className="px-2 bg-white">
				<Home />
			</View>
		</View>
	);
};

export default HomeScreen;
