//imports
import {
  Image,
  View,
  Text,
  SafeAreaView,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useCallback, useState } from "react";
import { useFonts } from "expo-font";
import { LinearGradient } from "expo-linear-gradient";
import * as SplashScreen from "expo-splash-screen";
import { useNavigation } from "@react-navigation/native";
import RecentlyVisitedSection from "./RecentlyVisited";
import Carousel from "./Carousel";

//Data
//recently visited
const RecentlyVisited = [
  {
    title: "Time Table",
    key: "1",
  },
  {
    title: "Time Table",
    key: "2",
  },
  {
    title: "Time Table",
    key: "3",
  },
];

//quick access
const QuickAccess = [
  {
    icon: require("../../assets/Icons/archive-book.png"),
    title: "Notes",
    description:
      "lorem ipsum dolor sit amet! quisiera una cerveza con pollo para la fiesta",
    backgroundColor: "#C4E9E5",
    link: "Notes",
  },
  {
    icon: require("../../assets/Icons/stickynote.png"),
    title: "Previous Papers",
    description:
      "lorem ipsum dolor sit amet! quisiera una cerveza con pollo para la fiesta",
    backgroundColor: "#FFC3CF",
    link: "Pyq",
  },
  {
    icon: require("../../assets/Icons/archive-book-1.png"),
    title: "Syllabus",
    description:
      "lorem ipsum dolor sit amet! quisiera una cerveza con pollo para la fiesta",
    backgroundColor: "#D0FFD2",
    link: "Syllabus",
  },
  // {
  //   icon: require("../../assets/Icons/archive-book-1.png"),
  //   title: "Syllabus",
  //   description:
  //     "lorem ipsum dolor sit amet! quisiera una cerveza con pollo para la fiesta",
  //   backgroundColor: "#D0FFD2",
  //   link: "",
  // },
];

const colorFluctuator = [
  {
    colors: ["#B6E9FF", "#B6E9FF", "#B6E9FF"],
  },
];

SplashScreen.preventAutoHideAsync();
// console.log(QuickAccess[1].backgroundColor);
//Home Component
const Home = () => {
  // Access the navigation prop using useNavigation hook from React Navigation
  const { navigate } = useNavigation();

  // Function to handle the button press and navigate to the "Notes" screen
  const onPress = (value) => {
    navigate(`${value}`);
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
    <SafeAreaView>
      <ScrollView
        // statusBarHeight={20}
        fitsSystemWindows={true}
        className="h-[82vh]"
        showsVerticalScrollIndicator={false} // Hide vertical scrollbar
        showsHorizontalScrollIndicator={false} // Hide horizontal scrollbar
        onLayout={onLayoutRootView}
      >
        {/* <MyCarousel /> */}
        {/* recently visited section */}
        <View className="space-y-5">
          <Text
            className="uppercase self-start"
            style={{ fontFamily: "open-sans-med", color: "#808080" }}
          >
            Recently Visited
          </Text>
          <ScrollView horizontal={true}>
            <View
              className="flex-row space-x-2 justify-between items-center z-0"
              style={{ zIndex: 0 }}
            >
              {RecentlyVisited &&
                RecentlyVisited.map((value, index) => {
                  return (
                    <LinearGradient
                      className="rounded-lg"
                      colors={["#C7EEFF", "#D3F2FF"]}
                      key={index}
                    >
                      <TouchableOpacity className=" uppercase p-3 flex-row space-x-1 ">
                        <Text
                          style={{
                            fontFamily: "open-sans-bold",
                          }}
                        >
                          {value.title}
                        </Text>
                        <Image
                          source={require("../../assets/Icons/up_arrow.png")}
                          className="w-4 h-4"
                        />
                      </TouchableOpacity>
                    </LinearGradient>
                  );
                })}
            </View>
          </ScrollView>
        </View>

        {/* Notice Board */}

        <View className="my-4">
          <Text
            className="uppercase self-start"
            style={{ fontFamily: "open-sans-med", color: "#808080" }}
          >
            Notice Board
          </Text>
          <Carousel />
        </View>
        {/* <RecentlyVisitedSection /> */}

        {/* Quick Access */}
        <View className="space-y-4">
          <Text
            className="uppercase self-start"
            style={{ fontFamily: "open-sans-med", color: "#808080" }}
          >
            Quick Access
          </Text>
          <View className="mb-5 space-y-4">
            {QuickAccess &&
              QuickAccess.map((value, index) => {
                return (
                  <View
                    key={index}
                    className="flex-row space-x-3 justify-evenly"
                  >
                    <View
                      className={`rounded-lg p-3 justify-center items-center`}
                      style={{
                        backgroundColor: value.backgroundColor,
                      }}
                    >
                      <Image source={value.icon} className="w-10 h-10" />
                    </View>
                    <View>
                      <Text
                        className="text-base"
                        style={{ fontFamily: "poppins-normal" }}
                      >
                        {value.title}
                      </Text>
                      <Text
                        className="w-56 text-xs"
                        style={{ fontFamily: "poppins-light" }}
                      >
                        {value.description}
                      </Text>
                    </View>
                    <TouchableOpacity>
                      <Image
                        source={require("../../assets/Icons/arrow_circle.png")}
                        className="w-10 h-10 my-3"
                      />
                    </TouchableOpacity>
                  </View>
                );
              })}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
