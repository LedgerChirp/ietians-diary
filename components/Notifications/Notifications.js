import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Notifications = () => {
	// Access the navigation prop using useNavigation hook from React Navigation
	const { navigate } = useNavigation();

	// Function to handle the button press and navigate to the "Notification" screen
	const onPress = () => {
		navigate("Notification");
	};
	return (
		<View>
			{/* TouchableOpacity to make the notification icon tappable */}
			<TouchableOpacity onPress={onPress}>
				{/* Image component to display the notification icon */}
				<Image
					source={require("../../assets/notification-icon.png")}
					className="w-8 self-center h-8 m-2 my-4"
				/>
			</TouchableOpacity>
		</View>
	);
};

export default Notifications;
