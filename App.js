import { View, SafeAreaView } from "react-native";
import React from "react";
import Home from "./components/Home/Home";
import AppNavigator from "./navigation/appNavigation";
// import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-[#ffffff]">
      <AppNavigator />
    </SafeAreaView>
  );
}
