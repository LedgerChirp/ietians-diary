import { View, Text, TouchableOpacity } from "react-native";
import React, { useCallback } from "react";
import { Image } from "react-native";
import { useFonts } from "expo-font";

import RecentlyViewed from "./RecentlyViewed";
import { useNavigation } from "@react-navigation/native";

// Material component responsible for displaying various study materials and recently viewed content
const Material = () => {
  // Access the navigation prop using useNavigation hook from React Navigation
  const { navigate } = useNavigation();

  // Function to handle the button press and navigate to the "Notes" screen
  const onPress = () => {
    navigate("Notes");
  };
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
  return (
    // View representing the container for the material component
    <View className="bg-white h-full z-20">
      {/* Three columns with study material categories */}
      <View className="flex-row justify-around my-2 items-center">
        {/* Study material category: Notes */}
        <TouchableOpacity
          onPress={onPress}
          className="flex-row justify-between px-3 w-[28%] items-center bg-[#C4E9E5] p-3 rounded-2xl"
        >
          <Image
            source={require("../../assets/Icons/archive-book.png")}
            className="w-8 h-8"
          />
          <Text
            style={{ fontFamily: "open-sans-med", color: "#000000" }}
            className="font-semibold"
          >
            Notes
          </Text>
        </TouchableOpacity>
        {/* Study material category: PYQ's */}
        <TouchableOpacity className="flex-row justify-between items-center px-3 p-3 w-[29%] bg-[#FFC3CF] rounded-2xl">
          <Image
            source={require("../../assets/Icons/stickynote.png")}
            className="w-8 h-8"
          />
          <Text
            style={{ fontFamily: "open-sans-med", color: "#000000" }}
            className="font-semibold"
          >
            PYQ's
          </Text>
        </TouchableOpacity>
        {/* Study material category: Syllabus */}
        <TouchableOpacity className="flex-row justify-between items-center px-3 p-3 w-[32%] bg-[#D0FFD2] rounded-2xl">
          <Image
            source={require("../../assets/Icons/archive-book-1.png")}
            className="w-8 h-8"
          />
          <Text
            style={{ fontFamily: "open-sans-med", color: "#000000" }}
            className="font-semibold"
          >
            Syllabus
          </Text>
        </TouchableOpacity>
      </View>
      {/* Schedule/Timetables */}
      <View className="flex-row justify-between px-2 mx-2 items-center py-4 bg-[#FFD3AA] rounded-2xl">
        <View className="flex-row space-x-3 items-center">
          <Image
            source={require("../../assets/Icons/calendar2.png")}
            className="w-10 h-10"
          />
          <View className="text-[#808080]">
            <Text
              style={{ fontFamily: "poppins-normal", color: "#000000" }}
              className="font-semibold text-base"
            >
              Schedule/Timetables
            </Text>
            <Text
              style={{ fontFamily: "poppins-normal", color: "#000000" }}
              className="text-xs"
            >
              Lorem Ipsum is simply dummy text.
            </Text>
          </View>
        </View>
        <TouchableOpacity>
          <Image
            source={require("../../assets/Icons/arrow_circle.png")}
            className="w-8 h-8"
          />
        </TouchableOpacity>
      </View>
      {/* Marksheet */}
      <View className="flex-row justify-between px-2 mx-2 mt-3 items-center py-4 bg-[#FFF7AA] rounded-2xl">
        <View className="flex-row space-x-3 items-center">
          <Image
            source={require("../../assets/Icons/documenttext1.png")}
            className="w-10 h-10"
          />
          <View className="text-[#808080]">
            <Text
              style={{ fontFamily: "poppins-normal", color: "#000000" }}
              className="font-semibold text-base"
            >
              Marksheet
            </Text>
            <Text
              style={{ fontFamily: "poppins-normal", color: "#000000" }}
              className="text-xs"
            >
              Lorem Ipsum is simply dummy text.
            </Text>
          </View>
        </View>
        <TouchableOpacity>
          <Image
            source={require("../../assets/Icons/arrow_circle.png")}
            className="w-8 h-8"
          />
        </TouchableOpacity>
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
