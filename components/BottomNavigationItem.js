import React from "react";
import { TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const BottomNavigationItem = ({ navigation, isFocused }) => {
	const { navigate } = useNavigation();

	const onPress = () => {
		navigate(`${navigation}`);
	};

	let iconSource;
	if (navigation === "Home") {
		iconSource = isFocused
			? require("../assets/Icons/home_blue.png")
			: require("../assets/Icons/home.png");
	} else if (navigation === "Material") {
		iconSource = isFocused
			? require("../assets/Icons/material_blue.png")
			: require("../assets/Icons/material.png");
	} else if (navigation === "Attendance") {
		iconSource = isFocused
			? require("../assets/Icons/attendance_blue.png")
			: require("../assets/Icons/attendance.png");
	} else {
		iconSource = null;
	}

	return (
		<TouchableOpacity onPress={onPress} className="p-2 rounded-full">
			{iconSource && <Image source={iconSource} className="w-7 h-7" />}
		</TouchableOpacity>
	);
};

export default BottomNavigationItem;
