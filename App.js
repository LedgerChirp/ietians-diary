// import { StatusBar } from "expo-status-bar";
import { View, SafeAreaView } from "react-native";
import React from "react";
import Home from "./components/Home/Home";

export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-[#ffffff]">
      <View className="flex-1 bg-[#ffffff]">
        <Home />
        {/* <Text>Open up App.js to start working on your app!</Text> */}
        {/* <StatusBar style="auto" /> */}
      </View>
    </SafeAreaView>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
