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
  const [Name, setName] = useState("");
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
    { label: "Computer Science", value: "Computer Science" },
    { label: "Information Technology", value: "Information Technology" },
    {
      label: "Electronics and Telecommunication",
      value: "Electronics and Telecommunication",
    },
    {
      label: "Electronics and Instrumentation",
      value: "Electronics and Instrumentation",
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
    <View className="bg-white">
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
          <Text className="text-2xl font-bold uppercase">
            Kanishk <Text className="font-light">Tiwari</Text>
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
        <View className="flex-row my-10 space-x-10">
          <View className="border-b-black border-spacing-10">
            <DropDownPicker
              value={value}
              items={Branch}
              setValue={setValue}
              setItems={setBranch}
              open={branchOpen}
              setOpen={setBranchOpen}
              onOpen={onBranchOpen}
              placeholder="Select Branch"
              className=""
              style={{
                borderWidth: 0,
                backgroundColor: "#ffffff",
                borderBottomWidth: 1.2,
                borderBottomColor: "black",
                zIndex: 40,
              }}
            />
          </View>
          <View>
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
                borderWidth: 0,
                backgroundColor: "#ffffff",
                borderBottomWidth: 1.2,
                borderBottomColor: "black",
                // width: 100,
                marginRight: 10,
                zIndex: 30,
                // height: 5,
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
    </View>
  );
};

export default SignUp;
