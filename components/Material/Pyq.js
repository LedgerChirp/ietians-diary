import {
  Image,
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useCallback, useState } from "react";
import { useFonts } from "expo-font";
import { LinearGradient } from "expo-linear-gradient";
import * as SplashScreen from "expo-splash-screen";

// Constant
const NoteInfo = [
  {
    name: "First",
    date: "12/2/23",
    id: 1,
  },
  {
    name: "Second",
    date: "15/2/23",
    id: 2,
  },
  {
    name: "Third",
    date: "18/2/23",
    id: 3,
  },
  {
    name: "Fourth",
    date: "20/2/23",
    id: 4,
  },
  {
    name: "Fifth",
    date: "22/2/23",
    id: 5,
  },
  {
    name: "Sixth",
    date: "25/2/23",
    id: 6,
  },
  {
    name: "Seventh",
    date: "03/3/23",
    id: 7,
  },
  {
    name: "Eighth",
    date: "05/3/23",
    id: 8,
  },
  {
    name: "Ninth",
    date: "11/3/23",
    id: 9,
  },
  {
    name: "Tenth",
    date: "18/3/23",
    id: 10,
  },
];

const Pyq = () => {
  return (
    <SafeAreaView>
      <Text className="font-semibold text-[#808080] mx-2 mt-2">PYQ's</Text>
      <ScrollView
        // statusBarHeight={20}
        fitsSystemWindows={true}
        className="h-[78vh]"
        showsVerticalScrollIndicator={false} // Hide vertical scrollbar
        showsHorizontalScrollIndicator={false} // Hide horizontal scrollbar
      >
        <View className="mb-20">
          {NoteInfo &&
            NoteInfo.map((value, key) => {
              return (
                <TouchableOpacity key={key}>
                  <View className="flex-row mt-3 items-center justify-around p-2 bg-[#F1F1F1] mx-2 rounded-2xl">
                    <Image
                      source={require("../../assets/Icons/pdf.png")}
                      className="w-10 h-10"
                    />
                    <Text className="text-lg text-[#808080] font-bold">
                      {/* Productivity.pdf */}
                      {value.name}
                    </Text>
                    <View className="flex-col items-center">
                      <Text className="text-xs text-[#808080]">Uploaded</Text>
                      {/* <Text className="text-xs text-[#808080]">12/2/23</Text> */}
                      <Text className="text-xs text-[#808080]">
                        {value.date}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Pyq;
