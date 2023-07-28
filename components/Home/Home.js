import { Image, View, Text, SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import Header from "../Header/Header";

const Home = () => {
	return (
		<View className="bg-white">
			<Header />
			<View style={styles.container}></View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		width: "50%",
		height: "50%",
	},
});

export default Home;
