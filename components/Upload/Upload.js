import { View, Text } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { TextInput } from "react-native";
import Header from "../Header/Header";

const Upload = () => {
	const [text, onChangeText] = useState("");
	const [open, setOpen] = useState(false);
	const [value, setValue] = useState(null);
	const [branchSelect, setBranchSelect] = useState("");
	const [sem, setSem] = useState("");
	const [filesname, setFilesname] = useState([
		{ label: "Maths", value: "Maths" },
		{ label: "Science", value: "Science" },
		{ label: "English", value: "English" },
		{ label: "Hindi", value: "Hindi" },
		{ label: "Sanskrit", value: "Sanskrit" },
		{ label: "Social Science", value: "Social Science" },
	]);

	return (
		<View className="bg-white h-full">
			<Header />
			<View className=" border-2 border-[#0FA958] rounded-2xl h-[70%] mx-3">
				<SafeAreaView>
					<TextInput
						placeholder="File Name"
						onChangeText={onChangeText} // Changed 'onChangeText' to 'onChangeText'
						value={text}
						placeholderStyle={{
							fontWeight: "light",
							color: "#807D7D",
						}}
						// Removed className, as it's not used in React Native. You can use 'style' instead.
						style={{
							borderBottomWidth: 2,
							borderColor: "#848484",
							// borderRadius: 8,
							width: "90%",
							padding: 8,
							paddingVertical: 10,
							marginVertical: 8,
							justifyContent: "center",
							flexDirection: "row",
							marginHorizontal: "5%",
						}}
					/>
					<View
						// Removed 'className' and replaced with 'style'
						style={{
							width: "90%", // Specify your desired width here
							// backgroundColor: "#B6E9FF",
							// padding: 8,
							marginHorizontal: "5%",
							marginVertical: 8,
							borderBottomWidth: 2,
							borderColor: "#848484",
							// borderRadius: 20,
						}}
					>
						<DropDownPicker
							open={open}
							value={value}
							items={filesname}
							setOpen={setOpen}
							setValue={setValue}
							setItems={setFilesname}
							placeholder="What Kind of File"
							// Removed 'className' and replaced with 'style'
							style={{
								backgroundColor: "#fff",
								borderWidth: 0,
								color: "#807D7D",
								zIndex: 100,
							}}
							placeholderStyle={{
								fontWeight: "light", // Changed 'light' to 'normal'
								color: "#807D7D",
								fontSize: 14, // Removed "px"
							}}
							dropDownContainerStyle={
								{
									// Removed commented code
									// backgroundColor: "#B6E9FF",
								}
							}
							listItemLabelStyle={{
								fontWeight: "bold",
								color: "#807D7D",
								fontSize: 14, // Removed "px"
								paddingHorizontal: 8, // Removed "px"
							}}
						/>
					</View>
					<TextInput
						placeholder="Branch"
						onChangeText={setBranchSelect} // Changed 'onChangeText' to 'onChangeText'
						value={branchSelect}
						placeholderStyle={{
							fontWeight: "light",
							color: "#807D7D",
						}}
						// Removed className, as it's not used in React Native. You can use 'style' instead.
						style={{
							borderBottomWidth: 2,
							borderColor: "#848484",
							marginVertical: 8,
							// borderRadius: 8,
							width: "90%",
							padding: 8,
							paddingVertical: 10,
							justifyContent: "center",
							flexDirection: "row",
							marginHorizontal: "5%",
						}}
					/>
					<TextInput
						placeholder="Semester"
						onChangeText={setSem} // Changed 'onChangeText' to 'onChangeText'
						value={sem}
						placeholderStyle={{
							fontWeight: "light",
							color: "#807D7D",
						}}
						// Removed className, as it's not used in React Native. You can use 'style' instead.
						style={{
							borderBottomWidth: 2,
							borderColor: "#848484",
							// borderRadius: 8,
							width: "90%",
							padding: 8,
							marginVertical: 8,
							paddingVertical: 10,
							justifyContent: "center",
							flexDirection: "row",
							marginHorizontal: "5%",
						}}
					/>
				</SafeAreaView>
			</View>
		</View>
	);
};

export default Upload;
