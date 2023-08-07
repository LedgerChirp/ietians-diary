import React from "react";
import { TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const UploadFileBottomNavigationItem = () => {
	const { navigate } = useNavigation();

	const onPress = () => {
		navigate("UploadFile");
	};
	

	return (
		<TouchableOpacity onPress={onPress} className="p-2 rounded-full">
			<Image
				source={require("../../assets/Icons/upload.png")}
				className="w-14 h-14"
			/>
		</TouchableOpacity>
	);
};

export default UploadFileBottomNavigationItem;
