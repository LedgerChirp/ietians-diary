import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import Home from "./components/Home";
import { SafeAreaView } from "react-native";

export default function App() {
  return (
    <TailwindProvider>
      <SafeAreaView className="flex-1">
        <View>
          <Home />
          <Image
            source={require("./assets/logo.png")}
            className="w-32 h-32 mx-2 my-3"
          />
          {/* <Text className='mx-auto text-xl'>Mohit</Text> */}
        </View>
      </SafeAreaView>
    </TailwindProvider>
  );
}
// const styles = StyleSheet.create({
//   image: {
//     width: 10,
//     height: 100,
//   },
// });
