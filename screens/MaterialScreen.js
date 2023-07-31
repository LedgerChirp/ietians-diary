import { View, Text } from "react-native";
import React from "react";
import Search from "../components/Material/Search";
import Header from "../components/Header/Header";
import Material from "../components/Material/Material";

const MaterialScreen = () => {
	return (
		<>
			<View className="bg-white">
				<Header />
				<Search />
				<Material />
			</View>
		</>
	);
};

export default MaterialScreen;
