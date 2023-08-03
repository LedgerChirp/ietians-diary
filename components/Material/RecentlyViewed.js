import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

const RecentlyViewed = () => {
  return (
    <View>
      <TouchableOpacity>
        <View className="flex-row mt-3 items-center justify-around p-2 bg-[#F1F1F1] mx-2 rounded-2xl">
          <Image
            source={require("../../assets/Icons/pdf.png")}
            className="w-10 h-10"
          />
          <Text className="text-lg text-[#808080] font-bold">
            Productivity.pdf
          </Text>
          <View className="flex-col items-center">
            <Text className="text-xs text-[#808080]">Uploaded</Text>
            <Text className="text-xs text-[#808080]">12/2/23</Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View className="flex-row mt-3 items-center justify-around p-2 bg-[#F1F1F1] mx-2 rounded-2xl">
          <Image
            source={require("../../assets/Icons/pdf.png")}
            className="w-10 h-10"
          />
          <Text className="text-lg text-[#808080] font-bold">
            Productivity.pdf
          </Text>
          <View className="flex-col items-center">
            <Text className="text-xs text-[#808080]">Uploaded</Text>
            <Text className="text-xs text-[#808080]">12/2/23</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default RecentlyViewed;
