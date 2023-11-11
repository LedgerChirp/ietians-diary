import { InfiniteSwiper } from "react-native-awesome-swiper";
import React, { useState } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import * as SplashScreen from "expo-splash-screen";
function renderItem({ item }) {
  //defining component states
  const [showName, useShowName] = useState(false);
  const handleImageTap = () => {
    useShowName(!showName);
  };
  return (
    <View className="w-[340px]">
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
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum
              dolores unde numquam quia quos non quidem est, ut, eos
              consequuntur maiores voluptas accusamus.
            </Text>
          </View>
          <View className="flex-row justify-between">
            <TouchableOpacity className="bg-black p-3 rounded-lg ">
              <Text
                className="text-white text-xs z-50"
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
  );
}
const Component = () => {
  const data = ["", "", ""];

  return (
    <InfiniteSwiper.Provider>
      <InfiniteSwiper.ScrollView
        className="mt-5"
        autoPlay
        data={data}
        duration={4000}
        renderItem={renderItem}
        height={230}
      />
    </InfiniteSwiper.Provider>
  );
};
export default Component;
