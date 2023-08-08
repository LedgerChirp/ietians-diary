import { View, Text, TouchableOpacity, Image, Button, TextInput, ScrollView, KeyboardAvoidingView, Platform } from "react-native";
import React, { useState, useCallback } from "react";
import { SafeAreaView } from "react-native";
import { AntDesign, Entypo } from '@expo/vector-icons';
import DropDownPicker from "react-native-dropdown-picker";
import * as ImagePicker from "expo-image-picker";
const Profile = () => {
    const [text, setText] = useState("");

    const [firstName, setFirstName] = useState("Kanishk");
    const [lastName, setLastName] = useState("Tiwari");

    const handleFirstNameChange = (first) => {
        console.log("first- " + first)
        setFirstName(first);
    }
    const handleLastNameChange = (last) => {
        console.log("last-" + last)
        setLastName(last);
    }

    //For Semester Dropdown
    const [semOpen, setSemOpen] = useState(false);
    const [semValue, setSemValue] = useState(null);
    const [semester, setSemester] = useState([
        { label: "First", value: "First" },
        { label: "Second", value: "Second" },
        { label: "Third", value: "Third" },
        { label: "Fourth", value: "Fourth" },
        { label: "Fifth", value: "Fifth" },
        { label: "Sixth", value: "Sixth" },
        { label: "Seventh", value: "Seventh" },
        { label: "Eighth", value: "Eighth" },
    ]);


    //For Branch Dropdown 
    const [branchOpen, setBranchOpen] = useState(false);
    const [branchValue, setBranchValue] = useState(null);
    const [branch, setBranch] = useState([
        { label: "IT", value: "Information Technology" },
        { label: "CS", value: "Computer Science" },
        { label: "ETC", value: "Electronics and Telecommunication" },
        { label: "EI", value: "Electronics and Instrumentation", },
        { label: "Mechanical", value: "Mechanical" },
        { label: "Civil", value: "Civil" },
    ]);

    //For Section Dropdown
    const [sectionOpen, setSectionOpen] = useState(false);
    const [sectionValue, setSectionValue] = useState(null);
    const [section, setSection] = useState([
        { label: "A", value: "A" },
        { label: "B", value: "B" },
        { label: "None", value: "None" },
    ]);

    const [RollNo, setRollNo] = useState("");
    const [mobile, setMobile] = useState("");
    // const [selectedValue, setSelectedValue] = useState("Fifth");

    const openSemDropdown = () => {
        setSemOpen(true);
        setBranchOpen(false);
        setSectionOpen(false);
    };

    const openBranchDropdown = () => {
        setSemOpen(false);
        setBranchOpen(true);
        setSectionOpen(false);
    };

    const openSectionDropdown = () => {
        setSemOpen(false);
        setBranchOpen(false);
        setSectionOpen(true);
    };

    const titleStyle = {
        fontWeight: 800,
    }

    const handleSubmit = async () => {
        const data = {
            fileName: text,
            fileType: value,
            branch: branchSelect,
            semester: sem,
            fileData: selectedFile,
        };
        console.log(data);
    };

    const [isVisible, setIsVisible] = useState(false);

    const handleVisibility = (dropDown) => {
        setIsVisible(dropDown)
    }

    const [image, setImage] = useState(
        "https://avatars.githubusercontent.com/u/72643990?v=4",
    );

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        console.log(result);

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    return (
        <SafeAreaView className="bg-white h-[100vh]">
            <View>
                <Image
                    source={require("../../assets/Logo.png")}
                    className="w-28 h-28 absolute self-center m-6"
                />
                <View className="py-4 mt-14 px-6 flex flex-row justify-between items-center">
                    <AntDesign name="left" size={24} color="black" />
                    <Text className="text-green-600 font-bold text-lg">Save</Text>
                </View>

                <View className="flex flex-row items-center">
                    <View>
                        {image && (
                            <Image source={{
                                uri: image,
                            }} className="w-44 h-44 mx-4 my-8 rounded-full" resizeMode="center" />
                        )}
                        <View className="absolute left-36 top-40 p-2 bg-blue-200 rounded-full">
                            <TouchableOpacity
                                onPress={pickImage}
                            >
                                <Entypo name="edit" size={24} color="black" />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View className="flex">
                        <View className="flex flex-row">
                            <TextInput className="font-[900] text-lg uppercase mr-2" value={firstName} onChangeText={e => { handleFirstNameChange(e) }} />
                            <TextInput className="text-lg font-light uppercase" value={lastName} onChangeText={e => { handleLastNameChange(e) }} />
                        </View>
                        <Text className="font-extralight">Student</Text>
                    </View>
                </View>
                <View className="m-5 flex space-y-8">
                    <View className="flex flex-row justify-between items-center">
                        <Text style={titleStyle}>Semester</Text>
                        <View className="w-48">
                            <DropDownPicker
                                open={semOpen}
                                value={semValue}
                                items={semester}
                                setOpen={setSemOpen}
                                setValue={setSemValue}
                                setItems={setSemester}
                                maxHeight={325}
                                onPress={openSemDropdown}
                                // theme="DARK"
                                placeholderStyle={{
                                    color: "grey",
                                    fontWeight: "bold",
                                }}
                                dropDownContainerStyle={{
                                    borderWidth: 0,
                                    borderRadius: 20,
                                    padding: 4,
                                    zIndex: 1000
                                }}
                                style={{
                                    borderWidth: 0,
                                    backgroundColor: "none",
                                    borderBottomWidth: 1.3,
                                    borderBottomColor: "gray",
                                }}
                            />
                        </View>
                        {/* <Entypo name="edit" size={24} color="black" /> */}
                    </View>
                    <View className="flex flex-row justify-between items-center -z-10">
                        <Text style={titleStyle}>Branch</Text>
                        <View className="w-48">
                            <DropDownPicker
                                open={branchOpen}
                                value={branchValue}
                                items={branch}
                                setOpen={setBranchOpen}
                                setValue={setBranchValue}
                                setItems={setBranch}
                                maxHeight={325}
                                onPress={openBranchDropdown}
                                // theme="DARK"
                                placeholderStyle={{
                                    color: "grey",
                                    fontWeight: "bold",
                                }}
                                dropDownContainerStyle={{
                                    borderWidth: 0,
                                    borderRadius: 20,
                                    padding: 4,
                                }}
                                style={{
                                    borderWidth: 0,
                                    backgroundColor: "none",
                                    borderBottomWidth: 1.3,
                                    borderBottomColor: "gray",
                                }}
                            />
                        </View>
                    </View>
                    <View className="flex flex-row justify-between items-center -z-20">
                        <Text style={titleStyle}>Section</Text>
                        <View className="w-48">
                            <DropDownPicker
                                open={sectionOpen}
                                value={sectionValue}
                                items={section}
                                setOpen={setSectionOpen}
                                setValue={setSectionValue}
                                setItems={setSection}
                                maxHeight={325}
                                onPress={openSectionDropdown}
                                dropDownDirection="BOTTOM"
                                placeholderStyle={{
                                    color: "grey",
                                    fontWeight: "bold",
                                }}
                                dropDownContainerStyle={{
                                    borderWidth: 0,
                                    borderRadius: 20,
                                    padding: 4,
                                }}
                                style={{
                                    borderWidth: 0,
                                    backgroundColor: "none",
                                    borderBottomWidth: 1.3,
                                    borderBottomColor: "gray",
                                }}
                            />
                        </View>
                    </View>

                    <View className="flex flex-row justify-between -z-50 items-center">
                        <Text style={titleStyle}>Roll No.</Text>
                        <View className="w-48 z-50">

                            <TextInput placeholder="Enter Roll Number" className="border-gray-400 border-b-2 rounded-lg pb-2" onChangeText={(newText) => setRollNo(newText)}
                                editable={true} value={RollNo}
                            >
                            </TextInput>
                        </View>
                    </View>
                    <View className="flex flex-row justify-between -z-50 items-center">
                        <Text style={titleStyle}>Phone No.</Text>
                        <View className="w-48 z-50">

                            <TextInput
                                onChangeText={setMobile}
                                value={mobile}
                                placeholder="Enter Phone Number"
                                className="border-gray-400 border-b-2 rounded-lg pb-2"
                                keyboardType="numeric">
                            </TextInput>

                        </View>
                    </View>

                </View>
            </View>
        </SafeAreaView>
    );
}

export default Profile;


/*

        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{ flex: 1 }}>
            <View className="flex flex-row justify-between items-center">
                <Text>Roll No.</Text>
                <View className="w-48">
                    <TextInput placeholder="Enter Roll Number" keyboardType="text"></TextInput>
                </View>
            </View>
            <View className="flex flex-row justify-between items-center">
                <Text>Phone No.</Text>
                <View className="w-48">
                    <TextInput
                        onChangeText={setMobile}
                        value={mobile}
                        placeholder="Enter Phone Number"
                        keyboardType="numeric">
                    </TextInput>
                </View>
            </View>
        </KeyboardAvoidingView>

*/