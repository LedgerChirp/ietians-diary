import { View, SafeAreaView, Image } from "react-native";
import React from "react";
import { TailwindProvider } from "tailwindcss-react-native";

const Home = () => {
  return (
    <TailwindProvider>
      <SafeAreaView>
        <View className="flex-1">
          <Image source={require("../assets/logo.png")} />
         
        </View>
      </SafeAreaView>
    </TailwindProvider>
  );
};

export default Home;
