import {
	SafeAreaView,
	View,
	Text,
	Image,
	TouchableOpacity,
} from "react-native";
// import { Overlay } from "expo";
import React, { useState } from "react";
import { Userpic } from "react-native-userpic";
import Notifications from "../Notifications/Notifications";
import Menu from "./Menu";

// Header component
const Header = () => {
	// State to manage the visibility of the menu
	const [showMenu, setShowMenu] = useState(false);

	// Function to handle showing/hiding the menu when the user taps the user profile picture
	const handleShowMenu = () => {
		setShowMenu(!showMenu);
	};

	return (
		// SafeAreaView to ensure content is safely rendered within the screen boundaries
		<SafeAreaView top={0}>
			{/* Conditionally render the Menu component based on the value of showMenu */}
			{showMenu && <Menu />}
			{/* View representing the container for the header content */}
			<View className="flex-row justify-between items-start">
				{/* View containing the app logo */}
				<View className="">
					{/* Image component to display the app logo */}
					<Image
						source={require("../../assets/Logo.png")}
						className="w-28 h-28 m-2"
					/>
				</View>
				{/* View containing the notifications icon and user profile picture */}
				<View className="flex-row mt-8 ">
					{/* Notifications component to handle displaying notifications */}
					<Notifications />
					{/* TouchableOpacity to make the user profile picture tappable */}
					<TouchableOpacity onPress={handleShowMenu}>
						{/* Userpic component to display the user's profile picture */}
						<Userpic
							source={{
								uri: "https://avatars.githubusercontent.com/u/98788439?v=4",
							}}
							email={"mustafaazad533@gmail.com" || "mohitaasirwal@gmail.com"}
							className="h-8 w-8 my-3 mx-2"
						/>
					</TouchableOpacity>
				</View>
			</View>
		</SafeAreaView>
	);
};

export default Header;
