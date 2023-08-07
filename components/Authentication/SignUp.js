//imports
import {
	View,
	Text,
	SafeAreaView,
	Image,
	TouchableOpacity,
	Button,
	TextInput,
} from "react-native";
import React, { useState, useCallback } from "react";
import Header from "../Header/MinimalHeader";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import * as ImagePicker from "expo-image-picker";
import { Picker } from "@react-native-picker/picker";
import DropDownPicker from "react-native-dropdown-picker";
//import end

//function for loading fonts
SplashScreen.preventAutoHideAsync();

const SignUp = () => {
	//states0
	const [image, setImage] = useState(
		"https://imgs.search.brave.com/b69e8q5lU7TpfQeQ_7q81DkY4si8IvS3R-ie2g12GP0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA1Lzc2LzY5LzY3/LzM2MF9GXzU3NjY5/Njc1MV9zb2NXTXRl/aEVXcDRTeXZEbEp0/c3RJQWtCYWtrR1RW/ay5qcGc"
	); //for loading image from user
	//form states
	const [Name, setName] = useState("Mustafa Azad");
	const [Enrol, setEnrol] = useState("");
	const [RollNo, setRollNo] = useState("");
	const [Semester, setSemester] = useState("");
	const [CollegeMail, setCollegeMail] = useState("");
	const [Mobile, setMobile] = useState("");
	const [Otp, setOtp] = useState("");
	//form states end
	//dropdown list
	// const [open, setOpen] = useState(false);
	const [value, setValue] = useState(null);
	const [Branch, setBranch] = useState([
		{ label: "CSE", value: "CSE" },
		{ label: "IT", value: "IT" },
		{
			label: "ETC",
			value: "ETC",
		},
		{
			label: "EI",
			value: "EI",
		},
		{ label: "Mechanical", value: "Mechanical" },
		{ label: "Civil", value: "Civil" },
	]);
	const [Section, setSection] = useState([
		{ label: "A", value: "A" },
		{ label: "B", value: "B" },
		{
			label: "None",
			value: "None",
		},
	]);
	// const [Branch, setBranch] = useState("Select Branch");
	// const [Section, setSection] = useState("Select Section");
	const [branchOpen, setBranchOpen] = useState(false);
	const [sectionOpen, setSectionOpen] = useState(false);

	const onBranchOpen = useCallback(() => {
		setSectionOpen(false);
	}, []);

	const onSectionOpen = useCallback(() => {
		setBranchOpen(false);
	}, []);

	//loading fonts
	const [fontsLoaded] = useFonts({
		"open-sans-med": require("../../assets/fonts/opensans/static/OpenSans-Medium.ttf"),
		"open-sans-bold": require("../../assets/fonts/opensans/static/OpenSans-Bold.ttf"),
		"poppins-light": require("../../assets/fonts/Poppins-light/Poppins-ExtraLight.ttf"),
		poppins: require("../../assets/fonts/Poppins/Poppins-Black.ttf"),
		"poppins-normal": require("../../assets/fonts/Poppins/Poppins-Light.ttf"),
	});

	const onLayoutRootView = useCallback(async () => {
		if (fontsLoaded) {
			await SplashScreen.hideAsync();
		}
	}, [fontsLoaded]);

	if (!fontsLoaded) {
		return null;
	}
	//font loading function end
	//image picking function
	const pickImage = async () => {
		// No permissions request is necessary for launching the image library
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.All,
			allowsEditing: true,
			aspect: [4, 3],
			quality: 1,
		});
		console.log(result);

		if (!result.canceled) {
			setImage(result.assets[0].uri);
		}
	};
	//rendering the view
	return (
		<View className="bg-white h-fit pb-2">
			<Header />
			{/* avatar section */}
			<View className="flex-row">
				<View className="mx-5">
					{image && (
						<Image
							source={{ uri: image }}
							className="rounded-full bg-black"
							style={{ width: 100, height: 100 }}
						/>
					)}
					<TouchableOpacity
						className="absolute top-2/3 left-3/4 bg-cyan-300 mx-auto rounded-full p-2"
						onPress={pickImage}
					>
						<Image
							source={require("../../assets/Icons/pen.png")}
							style={{
								width: 10,
								height: 10,
							}}
						/>
					</TouchableOpacity>
				</View>
				<View className="self-center">
					<Text className="text-2xl font-bold uppercase overflow-x-hidden">
						{Name.split(" ")[0] || "Mustafa"}{" "}
						<Text className="font-light">{Name.split(" ")[1] || "Azad"}</Text>
					</Text>
					<Text
						className="font-extralight text-base"
						style={{ fontFamily: "open-sans-med" }}
					>
						Student
					</Text>
				</View>
			</View>
			{/* Form */}
			<View
				className="flex space-y-2 my-52"
				style={{
					flex: 1,
					alignItems: "center",
					justifyContent: "center",
					zIndex: 0,
				}}
			>
				<TextInput
					style={{
						width: "80%",
						height: 40,
						borderBottomWidth: 1.2,
						borderBottomColor: "black",
						borderColor: "gray",
						paddingHorizontal: 10,
					}}
					value={Name}
					onChangeText={(newText) => setName(newText)}
					editable={true}
					placeholder="Name"
				/>
				<TextInput
					style={{
						width: "80%",
						height: 40,
						borderBottomWidth: 1.2,
						borderBottomColor: "black",
						borderColor: "gray",
						paddingHorizontal: 10,
					}}
					value={Enrol}
					onChangeText={(newText) => setEnrol(newText)}
					editable={true}
					placeholder="Enrolment No."
				/>
				<TextInput
					style={{
						width: "80%",
						height: 40,
						borderBottomWidth: 1.2,
						borderBottomColor: "black",
						borderColor: "gray",
						paddingHorizontal: 10,
					}}
					value={RollNo}
					onChangeText={(newText) => setRollNo(newText)}
					editable={true}
					placeholder="Current Roll No."
				/>
				<View className="flex-row my-10 items-center justify-between z-50 w-[80%]">
					<View
						className=""
						style={{
							width: "48%",
						}}
					>
						<DropDownPicker
							value={value}
							items={Branch}
							setValue={setValue}
							setItems={setBranch}
							open={branchOpen}
							setOpen={setBranchOpen}
							onOpen={onBranchOpen}
							placeholder="Select Branch"
							className="border-0"
							style={{
								backgroundColor: "#ffffff",
								color: "#807D7D",
							}}
							placeholderStyle={{
								fontWeight: "normal", // Changed 'light' to 'normal'
								color: "#807D7D",
								fontSize: 14, // Removed "px"
							}}
							dropDownContainerStyle={{
								backgroundColor: "#fff",
								// Removed commented code
								// backgroundColor: "#B6E9FF",
							}}
							listItemLabelStyle={{
								fontWeight: "bold",
								color: "#807D7D",
								backgroundColor: "#fff",
								fontSize: 14, // Removed "px"
								paddingHorizontal: 8, // Removed "px"
							}}
							// Add scrollViewProps to customize the ScrollView behavior
							scrollViewProps={{
								scrollEnabled: true, // Allow scrolling
								nestedScrollEnabled: true, // Enable nested scrolling
							}}
						/>
					</View>
					<View
						style={{
							width: "48%",
							marginHorizontal: 0,
						}}
					>
						<DropDownPicker
							open={sectionOpen}
							setOpen={setSectionOpen}
							value={value}
							items={Section}
							onOpen={onSectionOpen}
							setValue={setValue}
							setItems={setSection}
							className=""
							placeholder="Select Section"
							style={{
								width: "100%",
								borderWidth: 0,
								backgroundColor: "#ffffff",
								color: "#807D7D",
							}}
							placeholderStyle={{
								fontWeight: "light", // Changed 'light' to 'normal'
								color: "#807D7D",
								fontSize: 14, // Removed "px"
							}}
							dropDownContainerStyle={{
								backgroundColor: "#fff",
								// Removed commented code
								// backgroundColor: "#B6E9FF",
							}}
							listItemLabelStyle={{
								fontWeight: "bold",
								color: "#807D7D",
								backgroundColor: "#fff",
								fontSize: 14, // Removed "px"
								paddingHorizontal: 8, // Removed "px"
							}}
						/>
					</View>
				</View>
				<TextInput
					style={{
						width: "80%",
						height: 40,
						borderBottomWidth: 1.2,
						borderBottomColor: "black",
						borderColor: "gray",
						paddingHorizontal: 10,
					}}
					value={Semester}
					onChangeText={(newText) => setSemester(newText)}
					editable={true}
					placeholder="Semester"
				/>
				<TextInput
					style={{
						width: "80%",
						height: 40,
						borderBottomWidth: 1.2,
						borderBottomColor: "black",
						borderColor: "gray",
						paddingHorizontal: 10,
					}}
					value={CollegeMail}
					onChangeText={(newText) => setCollegeMail(newText)}
					editable={true}
					placeholder="College Email ID"
				/>
				<TextInput
					style={{
						width: "80%",
						height: 40,
						borderBottomWidth: 1.2,
						borderBottomColor: "black",
						borderColor: "gray",
						paddingHorizontal: 10,
					}}
					value={Mobile}
					onChangeText={(newText) => setMobile(newText)}
					editable={true}
					placeholder="Mobile No."
				/>
				<TextInput
					style={{
						width: "80%",
						height: 40,
						borderBottomWidth: 1.2,
						borderBottomColor: "black",
						borderColor: "gray",
						paddingHorizontal: 10,
					}}
					value={Otp}
					onChangeText={(newText) => setOtp(newText)}
					editable={true}
					placeholder="Enter OTP"
				/>
			</View>
			<TouchableOpacity className="w-[90%] mx-[5%] bg-[#0FA958] rounded-xl py-5">
				<Text className="text-center text-white font-semibold">Submit</Text>
			</TouchableOpacity>
		</View>
	);
};

export default SignUp;
