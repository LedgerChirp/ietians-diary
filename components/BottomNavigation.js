import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const BottomNavigation = ({ state, descriptors, navigation }) => {
	const currentRoute = state?.routes[state.index].name;
	const { navigate } = useNavigation();

	return (
		<View className="flex items-center flex-row bg-transparent mx-4 justify-between mr-10">
			{state?.routes?.map((route, index) => {
				const { options } = descriptors[route.key];
				const label = options.tabBarLabel || route.name;
				const isFocused = state.index === index;

				const onPress = () => {
					if (!isFocused) {
						navigate(route.name);
					}
				};

				if (label === "UploadFile") {
					return (
						<TouchableOpacity
							key={route.key}
							onPress={onPress}
							className="items-center flex-row p-2 rounded-full"
						>
							<Image
								source={require("../assets/Icons/upload.png")}
								style={{ width: 60, height: 60 }}
							/>
						</TouchableOpacity>
					);
				}

				return (
					<TouchableOpacity
						key={route.key}
						onPress={onPress}
						className="items-center flex-row rounded-full"
					>
						<Image
							source={
								route.name === "Home"
									? require("../assets/Icons/home.png")
									: route.name === "Attendance"
									? require("../assets/Icons/attendance.png")
									: require("../assets/Icons/material.png")
							}
							style={{ width: 30, height: 30 }}
						/>
					</TouchableOpacity>
				);
			})}
		</View>
	);
};

export default BottomNavigation;
