import React from "react";
import { View } from "react-native";
import BottomNavigationItem from "./BottomNavigationItem";
import UploadFileBottomNavigationItem from "./UploadFileBottomNavigationItem";

const BottomNavigation = ({ state, descriptors, navigation }) => {
  const currentRoute = state?.routes[state.index].name;

  return (
    <>
      <View className="items-center flex-row mx-4 justify-between">
        <UploadFileBottomNavigationItem />

        <View className="border-2 rounded-3xl justify-evenly w-[80%] flex-row">
          <BottomNavigationItem
            navigation="Home"
            isFocused={currentRoute === "Home"}
          />
          <BottomNavigationItem
            navigation="Material"
            isFocused={currentRoute === "Material"}
          />
          <BottomNavigationItem
            navigation="Notes"
            isFocused={currentRoute === "Notes"}
          />
          <BottomNavigationItem
            navigation="Attendance"
            isFocused={currentRoute === "Attendance"}
          />
        </View>
      </View>
    </>
  );
};

export default BottomNavigation;
