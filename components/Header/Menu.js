import { View, Text, Switch } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import React, { useCallback, useState } from "react";
import { useFonts } from "expo-font";

SplashScreen.preventAutoHideAsync();

const Menu = () => {
  const [fontsLoaded] = useFonts({
    "open-sans-med": require("../../assets/fonts/opensans/static/OpenSans-Medium.ttf"),
    "open-sans-bold": require("../../assets/fonts/opensans/static/OpenSans-Bold.ttf"),
    "poppins-light": require("../../assets/fonts/Poppins-light/Poppins-ExtraLight.ttf"),
    poppins: require("../../assets/fonts/Poppins/Poppins-Black.ttf"),
    "poppins-normal": require("../../assets/fonts/Poppins/Poppins-Light.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);
  if (!fontsLoaded) {
    return null;
  }

  return (
    <View
      className="w-auto space-y-3 h-auto rounded-lg blur-sm bg-white absolute top-24 right-5 z-50"
      onLayout={onLayoutRootView}
      style={{ zIndex: 1000 }}
    >
      <Text
        className="text-base px-2 py-1"
        style={{ fontFamily: "poppins-normal" }}
      >
        Dark Mode
      </Text>
      <Text
        className="text-base px-2 py-1"
        style={{ fontFamily: "poppins-normal" }}
      >
        Profile
      </Text>
      <Text
        className="text-base px-2 py-1"
        style={{ fontFamily: "poppins-normal" }}
      >
        Settings
      </Text>
      <Text
        className="text-base px-2 py-1"
        style={{ fontFamily: "poppins-normal" }}
      >
        Log Out
      </Text>
    </View>
  );
};

export default Menu;
