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
    link: "",
  },
  {
    icon: require("../../assets/Icons/stickynote.png"),
    title: "Previous Papers",
    description:
      "lorem ipsum dolor sit amet! quisiera una cerveza con pollo para la fiesta",
    backgroundColor: "#FFC3CF",
    link: "",
  },
  {
    icon: require("../../assets/Icons/archive-book-1.png"),
    title: "Syllabus",
    description:
      "lorem ipsum dolor sit amet! quisiera una cerveza con pollo para la fiesta",
    backgroundColor: "#D0FFD2",
    link: "",
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
  //defining component states
  const [showName, useShowName] = useState(false);
  const handleImageTap = () => {
    useShowName(!showName);
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
    <ScrollView
      // statusBarHeight={20}
      fitsSystemWindows={true}
      className="h-[82vh]"
      showsVerticalScrollIndicator={false} // Hide vertical scrollbar
      showsHorizontalScrollIndicator={false} // Hide horizontal scrollbar
      onLayout={onLayoutRootView}
    >
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

      <View className="my-4 space-y-4">
        <Text
          className="uppercase self-start"
          style={{ fontFamily: "open-sans-med", color: "#808080" }}
        >
          Notice Board
        </Text>
        <LinearGradient
          className="rounded-xl"
          locations={[0.75, 1, 0.6]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          colors={["#B6E9FF", "#B6E9FF", "#B6E9FF"]}
        >
          <View className="w-full h-auto m-3">
            <View className="flex-row justify-between">
              <View>
                <Text
                  className="text-xs text-black"
                  style={{ fontFamily: "poppins-normal" }}
                >
                  Sem-4
                </Text>
                <Text
                  className="uppercase text-sm"
                  style={{ fontFamily: "poppins" }}
                >
                  Computer Engg.
                </Text>
              </View>
              <View className="flex-row mx-7">
                {showName && (
                  <Text
                    className="text-xs p-3 -mx-5 pr-6 bg-[#D6F2FE] rounded-2xl"
                    style={{ fontFamily: "poppins-normal" }}
                  >
                    Mustafa Azad
                  </Text>
                )}
                <TouchableOpacity onPress={handleImageTap}>
                  <Image
                    className="w-10 h-10 rounded-full"
                    source={require("../../assets/teacher-image.png")}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View>
              {/* yaha pe dhyan rakhna padega ki description kitni lines ka dena hai */}
              <Text
                className="text-sm py-2 mr-10"
                style={{ fontFamily: "poppins-normal" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Laborum dolores unde numquam quia quos non quidem est, ut, eos
                consequuntur maiores voluptas accusamus.
              </Text>
            </View>
            <View className="flex-row justify-between">
              <TouchableOpacity className="bg-black p-3 rounded-lg ">
                <Text
                  className="text-white text-xs"
                  style={{ fontFamily: "poppins" }}
                >
                  View All
                </Text>
              </TouchableOpacity>
              <Text
                className="text-xs mx-10 my-3"
                style={{ fontFamily: "poppins-normal" }}
              >
                10:20 PM
              </Text>
            </View>
          </View>
        </LinearGradient>
      </View>


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
									<View key={index} className="flex-row space-x-3 justify-evenly">
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
