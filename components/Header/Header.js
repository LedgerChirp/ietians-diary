import { SafeAreaView, View, Text, Image } from "react-native";
import React from "react";
import { Userpic } from "react-native-userpic";

const Header = () => {
	return (
		<SafeAreaView className="bg-white">
			<View className="flex-row justify-between items-start">
				<View className="">
					<Image
						source={require("../../assets/Logo.png")}
						className="w-28 h-28 m-2"
					/>
				</View>
				<View className="flex-row mt-9">
					<Image
						source={require("../../assets/notification-icon.png")}
						className="w-8 self-center h-8 m-2 my-4"
					/>
					<Userpic
						source={{
							uri: "https://avatars.githubusercontent.com/u/97380192?v=4",
						}}
						email={"mustafaazad533@gmail.com" || "mohitaasirwal@gmail.com"}
						className="h-8 w-8 m-2"
					/>
				</View>
			</View>
		</SafeAreaView>
	);
};

export default Header;
