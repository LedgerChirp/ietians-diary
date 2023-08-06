import {
  TouchableOpacity,
  View,
  Text,
  ScrollView,
  SafeAreaView,
} from "react-native";
import React from "react";

const todayMessages = [
  {
    id: 1,
    title: "New Material Uploaded",
    description: "Software Engineering Notes for MST-1",
    time: "10:30 PM",
  },
  {
    id: 2,
    title: "New Material Uploaded",
    description: "Software Engineering Notes for MST-1",
    time: "10:30 PM",
  },
  {
    id: 3,
    title: "New Material Uploaded",
    description: "Software Engineering Notes for MST-1",
    time: "10:30 PM",
  },
];

const yesterdayMessages = [
  {
    id: 1,
    title: "New Material Uploaded",
    description: "Software Engineering Notes for MST-1",
    time: "10:30 PM",
  },
  {
    id: 1,
    title: "New Material Uploaded",
    description: "Software Engineering Notes for MST-1",
    time: "10:30 PM",
  },
  {
    id: 1,
    title: "New Material Uploaded",
    description: "Software Engineering Notes for MST-1",
    time: "10:30 PM",
  },
];

const thisWeekMessages = [
  {
    id: 1,
    title: "New Material Uploaded",
    description: "Software Engineering Notes for MST-1",
    time: "10:30 PM",
  },
  {
    id: 1,
    title: "New Material Uploaded",
    description: "Software Engineering Notes for MST-1",
    time: "10:30 PM",
  },
  {
    id: 1,
    title: "New Material Uploaded",
    description: "Software Engineering Notes for MST-1",
    time: "10:30 PM",
  },
  {
    id: 1,
    title: "New Material Uploaded",
    description: "Software Engineering Notes for MST-1",
    time: "10:30 PM",
  },
];

const Screen = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text className="text-lg font-bold text-zinc-500 mx-5 mt-10">Notifications</Text>
        </View>
        <View>
          <Text className="text-xs font-medium text-zinc-500 text-right mx-5 my-2 ">Today</Text>
          {todayMessages &&
            todayMessages.map((values, id) => {
              return (
                <TouchableOpacity key={id}>
                  <View className="flex-row justify-between items-center mx-5 my-1 border border-zinc-400 rounded-xl px-3 py-3 bg-[#cde8f3]">
                    <View>
                      <Text className="text-sm font-semibold">{values.title}</Text>
                      <Text className="text-sm text-zinc-500">{values.description}</Text>
                    </View>
                    <Text className="text-xs text-zinc-500">{values.time}</Text>
                  </View>
                </TouchableOpacity>
              );
            })}
        </View>
        <View>
          <Text className="text-xs font-medium text-zinc-500 text-right mx-5 my-2">Yesterday</Text>
          {yesterdayMessages &&
            yesterdayMessages.map((values, id) => {
              return (
                <TouchableOpacity key={id}>
                  <View className="flex-row justify-between items-center mx-5 my-1 border border-zinc-400 rounded-xl px-3 py-3 bg-[#ffddf8]">
                    <View>
                      <Text className="text-sm font-medium">{values.title}</Text>
                      <Text className="text-sm text-zinc-500">{values.description}</Text>
                    </View>
                    <Text className="text-xs text-zinc-500">{values.time}</Text>
                  </View>
                </TouchableOpacity>
              );
            })}
        </View>
        <View>
          <Text className="text-xs font-medium text-zinc-500 text-right mx-5 my-2">This Week</Text>
          {thisWeekMessages &&
            thisWeekMessages.map((values, id) => {
              return (
                <TouchableOpacity key={id}>
                  <View className="flex-row justify-between items-center mx-5 my-1 border border-zinc-400 rounded-xl px-3 py-3 bg-[#ddffdf]">
                    <View>
                      <Text className="text-sm font-medium">{values.title}</Text>
                      <Text className="text-sm text-zinc-500">{values.description}</Text>
                    </View>
                    <Text className="text-xs text-zinc-500">{values.time}</Text>
                  </View>
                </TouchableOpacity>
              );
            })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Screen;
