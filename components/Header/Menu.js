import { View, Text, Switch } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import React, { useCallback, useState } from "react";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";

SplashScreen.preventAutoHideAsync();

const Menu = () => {
  const { navigate } = useNavigation();

  const onPressProfile = () => {
    navigate("Profile");
  };
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
      // className="w-auto space-y-3 h-auto rounded-lg blur-sm bg-white absolute top-24 right-5"
      onLayout={onLayoutRootView}
      style={{
        position: "absolute",
        top: 90,
        right: 5,
        zIndex: 1000,
        backgroundColor: "white",
        borderRadius: 10,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5,
      }}
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
        onPress={onPressProfile}
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
