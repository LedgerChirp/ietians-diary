import { View, Text, TouchableOpacity, Image, Button } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { TextInput } from "react-native";
import Header from "../Header/Header";
import * as DocumentPicker from "expo-document-picker";
import uploadIcon from "../../assets/Icons/uploadicon.png";
import pdf from "../../assets/Icons/pdf.png";

const Upload = () => {
  const [text, onChangeText] = useState("");
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [branchSelect, setBranchSelect] = useState("");
  const [sem, setSem] = useState("");
  const [filesname, setFilesname] = useState([
    { label: "Notes", value: "Notes" },
    { label: "Previous Year Papers", value: "Previous Year Papers" },
    { label: "Documents", value: "Documents" },
  ]);

  const [selectedFile, setSelectedFile] = useState(null);

  const pickFile = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: "application/pdf",
      });

      if (result.type === "success") {
        setSelectedFile(result);
      } else {
        console.log("Document picking cancelled.");
      }
    } catch (err) {
      console.log("Error selecting document:", err);
    }
  };

  const deleteFile = () => {
    setSelectedFile(null);
  };

  const serverUrl = "";

  const handleSubmit = async () => {
    // Prepare the data to be sent to the server
    const data = {
      fileName: text,
      fileType: value,
      branch: branchSelect,
      semester: sem,
      fileData: selectedFile,
    };
    console.log(data);

    // try {
    //   const response = await fetch(serverUrl, {
    // 	method: "POST",
    // 	headers: {
    // 	  "Content-Type": "application/json",
    // 	},
    // 	body: JSON.stringify(data),
    //   });

    //   if (response.ok) {
    // 	console.log("File uploaded successfully!");
    // 	// Optionally, you can reset the form fields here:
    // 	onChangeText("");
    // 	setValue(null);
    // 	setBranchSelect("");
    // 	setSem("");
    // 	setSelectedFile(null);
    //   } else {
    // 	console.log("File upload failed.");
    //   }
    // } catch (error) {
    //   console.error("Error uploading file:", error);
    // }
  };

  return (
    <View className="bg-white h-full">
      <Header />
      <View className=" border-2 border-[#0FA958] rounded-2xl h-fit py-6 mx-3">
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
              zIndex: 100,
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
              className="bg-white"
              maxHeight={325}
              // Removed 'className' and replaced with 'style'
              style={{
                zIndex: 100,
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
          <TouchableOpacity
            onPress={pickFile}
            className="my-4 py-2 border-2 border-[#A9A9A9] rounded-3xl w-[80%] mx-auto flex-row justify-evenly items-center"
          >
            <Image source={uploadIcon} className="w-6 h-6" />
            <Text className="text-[#919191]">UPLOAD YOUR FILES HERE</Text>
          </TouchableOpacity>
          <Text className="font-semibold my-2 text-sm text-[#ABABAB] w-[90%] mx-[5%]">
            UPLOADED FILES
          </Text>
          {selectedFile && (
            <>
              <TouchableOpacity
                className="relative top-6 z-10 flex-row rounded-full bg-[#c0c0c0] w-fit h-10 items-center justify-end font-bold  mx-[5%] w-[90%]"
                onPress={deleteFile}
              >
                <Text className="  items-center flex justify-center text-center text-[10px] hover:bg-[#0FB]">
                  ✖️
                </Text>
              </TouchableOpacity>
              <View className="w-[90%] mx-[5%] flex-row items-center justify-between bg-slate-200 rounded-2xl p-3 mt-3">
                <Image source={pdf} className="w-7 h-7" />
                <Text
                  className="max-w-[60%] overflow-x-hidden text-[#848484] font-semibold"
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                  {selectedFile.name}
                </Text>
                <Text className="text-[10px] text-[#848484]">Uploaded</Text>
              </View>
            </>
          )}
        </SafeAreaView>
      </View>
      <TouchableOpacity
        className="w-[90%] mx-[5%] bg-[#0FA958] rounded-xl py-5 mt-4"
        onPress={handleSubmit}
      >
        <Text className="text-center text-white font-semibold">Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Upload;
