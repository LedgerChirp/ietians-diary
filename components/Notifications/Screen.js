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
    title: "Lorem Ipsum",
    description: "Lorem Ipsum Dolor Sit Amet",
    time: "10:30 PM",
  },
  {
    id: 2,
    title: "Lorem Ipsum",
    description: "Lorem Ipsum Dolor Sit Amet",
    time: "10:30 PM",
  },
  {
    id: 3,
    title: "Lorem Ipsum",
    description: "Lorem Ipsum Dolor Sit Amet",
    time: "10:30 PM",
  },
];

const yesterdayMessages = [
  {
    id: 1,
    title: "Lorem Ipsum",
    description: "Lorem Ipsum Dolor Sit Amet",
    time: "10:30 PM",
  },
  {
    id: 1,
    title: "Lorem Ipsum",
    description: "Lorem Ipsum Dolor Sit Amet",
    time: "10:30 PM",
  },
  {
    id: 1,
    title: "Lorem Ipsum",
    description: "Lorem Ipsum Dolor Sit Amet",
    time: "10:30 PM",
  },
];

const thisWeekMessages = [
  {
    id: 1,
    title: "Lorem Ipsum",
    description: "Lorem Ipsum Dolor Sit Amet",
    time: "10:30 PM",
  },
  {
    id: 1,
    title: "Lorem Ipsum",
    description: "Lorem Ipsum Dolor Sit Amet",
    time: "10:30 PM",
  },
  {
    id: 1,
    title: "Lorem Ipsum",
    description: "Lorem Ipsum Dolor Sit Amet",
    time: "10:30 PM",
  },
  {
    id: 1,
    title: "Lorem Ipsum",
    description: "Lorem Ipsum Dolor Sit Amet",
    time: "10:30 PM",
  },
];

const Screen = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text className="text-3xl mx-5 mt-10">Notifications</Text>
        </View>
        <View>
          <Text className="text-lg mx-5 my-2 self-center">Today</Text>
          {todayMessages &&
            todayMessages.map((values, id) => {
              return (
                <TouchableOpacity key={id}>
                  <View className="flex-row justify-between items-center mx-5 my-2">
                    <View>
                      <Text className="text-lg">{values.title}</Text>
                      <Text className="text-lg">{values.description}</Text>
                    </View>
                    <Text className="text-lg">{values.time}</Text>
                  </View>
                </TouchableOpacity>
              );
            })}
        </View>
        <View>
          <Text className="text-lg mx-5 my-2 self-center">Yesterday</Text>
          {yesterdayMessages &&
            yesterdayMessages.map((values, id) => {
              return (
                <TouchableOpacity key={id}>
                  <View className="flex-row justify-between items-center mx-5 my-2">
                    <View>
                      <Text className="text-lg">{values.title}</Text>
                      <Text className="text-lg">{values.description}</Text>
                    </View>
                    <Text className="text-lg">{values.time}</Text>
                  </View>
                </TouchableOpacity>
              );
            })}
        </View>
        <View>
          <Text className="text-lg mx-5 my-2 self-center">This Week</Text>
          {thisWeekMessages &&
            thisWeekMessages.map((values, id) => {
              return (
                <TouchableOpacity key={id}>
                  <View className="flex-row justify-between items-center mx-5 my-2">
                    <View>
                      <Text className="text-lg">{values.title}</Text>
                      <Text className="text-lg">{values.description}</Text>
                    </View>
                    <Text className="text-lg">{values.time}</Text>
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
