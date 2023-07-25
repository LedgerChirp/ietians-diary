import { View, Text } from "react-native";
import React from "react";
import { Image } from "react-native";

const Material = () => {
	return (
		<View className="bg-white h-full">
			<View className="flex-row justify-around my-2 items-center">
				<View className="flex-row justify-between px-3 w-[29%] items-center bg-[#C4E9E5] p-3 rounded-2xl">
					<Image
						source={require("../../assets/Icons/archive-book.png")}
						className="w-8 h-8"
					/>
					<Text className="font-semibold">Notes</Text>
				</View>
				<View className="flex-row justify-between items-center px-3 p-3 w-[29%] bg-[#FFC3CF] rounded-2xl">
					<Image
						source={require("../../assets/Icons/stickynote.png")}
						className="w-8 h-8"
					/>
					<Text className="font-semibold">PYQ's</Text>
				</View>
				<View className="flex-row justify-between items-center px-3 p-3 w-[32%] bg-[#D0FFD2] rounded-2xl">
					<Image
						source={require("../../assets/Icons/archive-book-1.png")}
						className="w-8 h-8"
					/>
					<Text className="font-semibold">Syllabus</Text>
				</View>
			</View>
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
			<Text className="font-semibold text-[#808080] mx-2 mt-4">
				Recently Viewed
			</Text>
			<View className="flex-row mt-3 items-center justify-around p-2 bg-[#F1F1F1] mx-2 rounded-2xl">
				<Image
					source={require("../../assets/Icons/pdf.png")}
					className="w-10 h-10"
				/>
				<Text className="text-lg text-[#808080] font-bold">
					Productivity.pdf
				</Text>
				<View className="flex-col items-center">
					<Text className="text-xs text-[#808080]">Uploaded</Text>
					<Text className="text-xs text-[#808080]">12/2/23</Text>
				</View>
			</View>
			<View className="flex-row mt-3 items-center justify-around p-2 bg-[#F1F1F1] mx-2 rounded-2xl">
				<Image
					source={require("../../assets/Icons/pdf.png")}
					className="w-10 h-10"
				/>
				<Text className="text-lg text-[#808080] font-bold">
					Productivity.pdf
				</Text>
				<View className="flex-col items-center">
					<Text className="text-xs text-[#808080]">Uploaded</Text>
					<Text className="text-xs text-[#808080]">12/2/23</Text>
				</View>
			</View>
		</View>
	);
};

export default Material;
