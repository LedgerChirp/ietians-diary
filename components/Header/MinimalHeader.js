// Header without notification and avatar icon
//meant for components that are not part of UI after login
import { View, Text, SafeAreaView, Image } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";

const MinimalHeader = () => {
  return (
    <SafeAreaView top={0} style={{ zIndex: 50 }}>
      {/* Conditionally render the Menu component based on the value of showMenu */}
      {/* View representing the container for the header content */}
      <View className="flex-row justify-start items-start">
        {/* View containing the app logo */}
        <TouchableOpacity>
          <Image
            source={require("../../assets/Icons/big-arrow.png")}
            className="mt-16 ml-5 mr-20"
            style={{
              width: 10,
              height: 15,
            }}
          />
        </TouchableOpacity>
        <View className="flex-row">
          {/* Image component to display the app logo */}
          <Image
            source={require("../../assets/Logo.png")}
            className="w-32 h-32 m-2"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MinimalHeader;
