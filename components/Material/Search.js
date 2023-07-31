import React, { useState } from "react";
import { Image } from "react-native";
import { View, TextInput, TouchableOpacity, Text } from "react-native";

// SearchBar component responsible for rendering a search bar with search functionality
const SearchBar = ({ data }) => {
	// State variables to manage search functionality
	const [searchText, setSearchText] = useState("");
	const [filteredData, setFilteredData] = useState([]);

	// Function to handle search input changes
	const handleSearch = (text) => {
		setSearchText(text);
		// Uncomment the following code to filter data based on search text
		// const filteredData = data.filter((item) =>
		// 	item.name.toLowerCase().includes(text.toLowerCase())
		// );
		// setFilteredData(filteredData);
	};

	return (
		// View representing the container for the search bar and search results
		<View className="bg-white z-30">
			{/* View containing the search bar */}
			<View className="flex-row items-center rounded-3xl border border-[#2079C3] my-2 mx-4 pl-8 bg-white">
				{/* Image component for the search icon */}
				<Image
					source={require("../../assets/Icons/search.png")}
					className="w-6 h-6 relative right-4"
				/>
				{/* TextInput for user input */}
				<TextInput
					className="flex-1 px-3 my-2 font-bold border-l-[0.5px] border-[#62A0D5] placeholder:text-[#62A0D5]/50 text-[#62A0D5]"
					placeholder="Search Materials Here . . . ."
					value={searchText}
					onChangeText={handleSearch}
					returnKeyType="search"
				/>
			</View>
			{/* Conditional rendering of search results */}
			{searchText?.length > 0 && (
				<TouchableOpacity className="relative -mb-60 h-60 truncate mx-2 top-2 rounded-2xl bg-white z-50">
					<Text className="p-2 text-lg">Searching for {searchText}</Text>
				</TouchableOpacity>
			)}
		</View>
	);
};

export default SearchBar;
