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

SplashScreen.preventAutoHideAsync();

const SignUp = () => {
  const [image, setImage] = useState("https://reactjs.org/logo-og.png");
  const [text, setText] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState();
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
  return (
    <View>
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
          <Text className="font-extralight text-base">Student</Text>
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
            borderBottomWidth: 1,
            borderBottomColor: "black",
            borderColor: "gray",
            paddingHorizontal: 10,
          }}
          value={text}
          onChangeText={(newText) => setText(newText)}
          editable={true}
          placeholder="Name"
        />
        <TextInput
          style={{
            width: "80%",
            height: 40,
            borderBottomWidth: 1,
            borderBottomColor: "black",
            borderColor: "gray",
            paddingHorizontal: 10,
          }}
          value={text}
          onChangeText={(newText) => setText(newText)}
          editable={true}
          placeholder="Enrolment No."
        />
        <TextInput
          style={{
            width: "80%",
            height: 40,
            borderBottomWidth: 1,
            borderBottomColor: "black",
            borderColor: "gray",
            paddingHorizontal: 10,
          }}
          value={text}
          onChangeText={(newText) => setText(newText)}
          editable={true}
          placeholder="Current Roll No."
        />
        <Picker
          selectedValue={selectedLanguage}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedLanguage(itemValue)
          }
        >
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker>
        <TextInput
          style={{
            width: "80%",
            height: 40,
            borderBottomWidth: 1,
            borderBottomColor: "black",
            borderColor: "gray",
            paddingHorizontal: 10,
          }}
          value={text}
          onChangeText={(newText) => setText(newText)}
          editable={true}
          placeholder="Semester"
        />
        <TextInput
          style={{
            width: "80%",
            height: 40,
            borderBottomWidth: 1,
            borderBottomColor: "black",
            borderColor: "gray",
            paddingHorizontal: 10,
          }}
          value={text}
          onChangeText={(newText) => setText(newText)}
          editable={true}
          placeholder="College Email ID"
        />
        <TextInput
          style={{
            width: "80%",
            height: 40,
            borderBottomWidth: 1,
            borderBottomColor: "black",
            borderColor: "gray",
            paddingHorizontal: 10,
          }}
          value={text}
          onChangeText={(newText) => setText(newText)}
          editable={true}
          placeholder="Mobile No."
        />
        <TextInput
          style={{
            width: "80%",
            height: 40,
            borderBottomWidth: 1,
            borderBottomColor: "black",
            borderColor: "gray",
            paddingHorizontal: 10,
          }}
          value={text}
          onChangeText={(newText) => setText(newText)}
          editable={true}
          placeholder="Enter OTP"
        />
      </View>
    </View>
  );
};

export default SignUp;
