import { SafeAreaView, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Userpic } from "react-native-userpic";
import { useNavigation } from "@react-navigation/native";

// Header component
const Header = () => {
	// Access the navigation prop using useNavigation hook from React Navigation
	const { navigate } = useNavigation();

	// Function to handle the button press and navigate to the "Notification" screen
	const onPress = () => {
		navigate("Notification");
	};

	return (
		// SafeAreaView to ensure content is safely rendered within the screen boundaries
		<SafeAreaView className="bg-white">
			{/* View representing the container for the header content */}
			<View className="flex-row justify-between items-start">
				{/* View containing the app logo */}
				<View className="">
					{/* Image component to display the logo image */}
					<Image
						source={require("../../assets/Logo.png")}
						className="w-28 h-28 m-2"
					/>
				</View>
				{/* View containing the notification icon and user profile picture */}
				<View className="flex-row mt-9">
					{/* TouchableOpacity to make the notification icon tappable */}
					<TouchableOpacity onPress={onPress}>
						{/* Image component to display the notification icon */}
						<Image
							source={require("../../assets/notification-icon.png")}
							className="w-8 self-center h-8 m-2 my-4"
						/>
					</TouchableOpacity>
					{/* Userpic component to display the user's profile picture */}
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
