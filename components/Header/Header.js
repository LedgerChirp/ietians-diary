import { SafeAreaView, View, Text, Image } from "react-native";
import React from "react";
import { Userpic } from "react-native-userpic";
import Notifications from "../Notifications/Notifications";
const Header = () => {
  return (
    <SafeAreaView>
      <View className="flex-row justify-between items-start">
        <View className="">
          <Image
            source={require("../../assets/Logo.png")}
            className="w-28 h-28 m-2"
          />
        </View>
        <View className="flex-row my-8 ">
          <Notifications />
          <Userpic
            source={{
              uri: "https://avatars.githubusercontent.com/u/98788439?v=4",
            }}
            email={"mustafaazad533@gmail.com" || "mohitaasirwal@gmail.com"}
            className="h-8 w-8 m-2"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Header;
