import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

const SignIn = () => {
  return (
    <View className="h-[100vh] w-[100vw] bg-white justify-evenly items-center">
      <Image
        source={require("../../assets/Logo.png")}
        className="w-40 h-40 mx-auto"
      />
      <View>
        <TouchableOpacity className="flex flex-row justify-evenly bg-black px-8 py-3 rounded-full">
          <Text className="text-white">SIGN IN</Text>
          <Image
            source={require("../../assets/Icons/google.png")}
            className="w-5 h-5"
          />
        </TouchableOpacity>
        <Text className="text-[#7F7F7F] font-light">
          *Sign In using College ID only
        </Text>
      </View>
      <Image
        source={require("../../assets/signin.png")}
        className="w-80 h-96"
      />
    </View>
  );
};

export default SignIn;
