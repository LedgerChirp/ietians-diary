import {
  View,
  Text,
  TouchableOpacity,
  Switch,
  Image,
  Touchable,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { AntDesign, Entypo } from "@expo/vector-icons";
import HorizontalRule from "./HorizontalRule";

const Settings = () => {
  const [isDarkEnable, setIsDarkEnable] = useState(true);
  const [isNotificationsEnable, setIsNotificationsEnable] = useState(true);
  const toggleSwitchDark = () =>
    setIsDarkEnable((previousState) => !previousState);
  const toggleSwitchNotifications = () =>
    setIsNotificationsEnable((previousState) => !previousState);
  const { navigate } = useNavigation();
  const onPressBack = () => {
    navigate("Home");
  };
  const onPressBug = () => {
    navigate("Bug");
  };
  const onPressAbout = () => {
    navigate("About");
  };
  return (
    <View className=" space-y-5">
      <View className="py-4 mt-14 px-6 space-x-28 flex flex-row justify-start items-center">
        <AntDesign
          name="left"
          size={18}
          color="black"
          className=""
          onPress={onPressBack}
        />
        <Text className="text-base font-bold">Settings</Text>
      </View>
      <View className="flex flex-row justify-between my-3 mx-7">
        <View className="flex flex-row space-x-4">
          <Image
            source={require("../../assets/Icons/moon.png")}
            className="w-6 h-6"
          />
          <Text className="text-xl">Dark Mode</Text>
        </View>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isDarkEnable ? "#f5dd4b" : "#f4f3f4"}
          value={isDarkEnable}
          onValueChange={toggleSwitchDark}
          className="absolute left-60 -bottom-3"
        ></Switch>
      </View>
      <HorizontalRule />
      <View className="flex flex-row justify-between my-3 mx-7">
        <View className="flex flex-row space-x-4">
          <Image
            source={require("../../assets/Icons/contibute.png")}
            className="w-6 h-6"
          />
          <Text className="text-xl">Contribute on GitHub</Text>
        </View>
      </View>
      <HorizontalRule />
      <View className="flex flex-row justify-between my-3 mx-7">
        <View className="flex flex-row space-x-4">
          <Image
            source={require("../../assets/Icons/bellwithoutdot.png")}
            width={1000}
            height={1000}
            className="w-6 h-6"
          />
          <Text className="text-xl">Notifications</Text>
        </View>
        <Switch
          //   trackColor={{ false: "#767577", true: "#81b0ff" }}
          //   thumbColor={isEnable ? "#f5dd4b" : "#f4f3f4"}
          value={isNotificationsEnable}
          onValueChange={toggleSwitchNotifications}
          className="absolute left-60 -bottom-3"
        ></Switch>
      </View>
      <HorizontalRule />
      <View className="flex flex-row justify-between my-3 mx-7">
        <View className="flex flex-row space-x-4">
          <Image
            source={require("../../assets/Icons/share.png")}
            className="w-6 h-[27px]"
          />
          <Text className="text-xl">Invite</Text>
        </View>
      </View>
      <HorizontalRule />
      <View className="flex  flex-row justify-between my-3 mx-7">
        <TouchableOpacity
          className="flex flex-row space-x-4"
          onPress={onPressAbout}
        >
          <Image
            source={require("../../assets/Icons/about.png")}
            className="w-6 h-6"
          />
          <Text className="text-xl">About</Text>
        </TouchableOpacity>
      </View>
      <HorizontalRule />
      <View className="flex flex-row justify-between mx-7">
        <TouchableOpacity className="flex flex-row space-x-4">
          <Image
            source={require("../../assets/Icons/bug.png")}
            className="w-6 h-6"
          />
          <Text className="text-xl">Report a Bug</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Settings;
