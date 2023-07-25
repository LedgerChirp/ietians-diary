import { View, Text, Image } from "react-native";
import React from "react";

const Notifications = () => {
  return (
    <View>
      <Image
        source={require("../../assets/notification-icon.png")}
        className="w-8 self-center h-8 m-2 my-4"
      />
    </View>
  );
};

export default Notifications;
