import React, { useState } from "react";
import { Image } from "react-native";
import { View, TextInput, TouchableOpacity, Text } from "react-native";

const SearchBar = ({ data }) => {
	const [searchText, setSearchText] = useState("");
	const [filteredData, setFilteredData] = useState([]);

	const handleSearch = (text) => {
		setSearchText(text);
		// const filteredData = data.filter((item) =>
		// 	item.name.toLowerCase().includes(text.toLowerCase())
		// );
		// setFilteredData(filteredData);
	};

	return (
		<View className="bg-white">
			<View className="flex-row items-center rounded-3xl border border-[#2079C3] my-2 mx-4 pl-8 bg-white">
				<Image
					source={require("../../assets/Icons/search.png")}
					className="w-6 h-6 relative right-4"
				/>
				<TextInput
					className="flex-1 px-3 my-2 font-bold border-l-[0.5px] border-[#62A0D5] placeholder:text-[#62A0D5]/50 text-[#62A0D5]"
					placeholder="Search Materials Here . . . ."
					value={searchText}
					onChangeText={handleSearch}
					returnKeyType="search"
				/>
			</View>
			{searchText.length > 0 && (
				<TouchableOpacity className="relative -mb-60 h-60 mx-2 top-2 rounded-2xl bg-white z-30">
					<Text className="p-2 text-lg">{searchText}</Text>
				</TouchableOpacity>
			)}
		</View>
	);
};

export default SearchBar;
