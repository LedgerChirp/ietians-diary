import { View, Text } from "react-native";
import React from "react";
import { Image } from "react-native";
import RecentlyViewed from "./RecentlyViewed";

// Material component responsible for displaying various study materials and recently viewed content
const Material = () => {
	return (
		// View representing the container for the material component
		<View className="bg-white h-full z-20">
			{/* Three columns with study material categories */}
			<View className="flex-row justify-around my-2 items-center">
				{/* Study material category: Notes */}
				<View className="flex-row justify-between px-3 w-[29%] items-center bg-[#C4E9E5] p-3 rounded-2xl">
					<Image
						source={require("../../assets/Icons/archive-book.png")}
						className="w-8 h-8"
					/>
					<Text className="font-semibold">Notes</Text>
				</View>
				{/* Study material category: PYQ's */}
				<View className="flex-row justify-between items-center px-3 p-3 w-[29%] bg-[#FFC3CF] rounded-2xl">
					<Image
						source={require("../../assets/Icons/stickynote.png")}
						className="w-8 h-8"
					/>
					<Text className="font-semibold">PYQ's</Text>
				</View>
				{/* Study material category: Syllabus */}
				<View className="flex-row justify-between items-center px-3 p-3 w-[32%] bg-[#D0FFD2] rounded-2xl">
					<Image
						source={require("../../assets/Icons/archive-book-1.png")}
						className="w-8 h-8"
					/>
					<Text className="font-semibold">Syllabus</Text>
				</View>
			</View>
			{/* Schedule/Timetables */}
			<View className="flex-row justify-between px-2 mx-2 items-center py-4 bg-[#FFD3AA] rounded-2xl">
				<View className="flex-row space-x-3 items-center">
					<Image
						source={require("../../assets/Icons/calendar2.png")}
						className="w-10 h-10"
					/>
					<View className="text-[#808080]">
						<Text className="font-semibold text-lg">Schedule/Timetables</Text>
						<Text className="text-xs">Lorem Ipsum is simply dummy text.</Text>
					</View>
				</View>
				<Image
					source={require("../../assets/Icons/arrow_circle.png")}
					className="w-8 h-8"
				/>
			</View>
			{/* Marksheet */}
			<View className="flex-row justify-between px-2 mx-2 mt-3 items-center py-4 bg-[#FFF7AA] rounded-2xl">
				<View className="flex-row space-x-3 items-center">
					<Image
						source={require("../../assets/Icons/documenttext1.png")}
						className="w-10 h-10"
					/>
					<View className="text-[#808080]">
						<Text className="font-semibold text-lg">Marksheet</Text>
						<Text className="text-xs">Lorem Ipsum is simply dummy text.</Text>
					</View>
				</View>
				<Image
					source={require("../../assets/Icons/arrow_circle.png")}
					className="w-8 h-8"
				/>
			</View>
			{/* Heading for recently viewed content */}
			<Text className="font-semibold text-[#808080] mx-2 mt-4">
				Recently Viewed
			</Text>
			{/* Display recently viewed content using RecentlyViewed component */}
			<RecentlyViewed />
		</View>
	);
};

export default Material;
