import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import NotificationsScreen from "../../screens/NotificationsScreen";

const Notifications = ({ navigation }) => {
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate("Notifications")}>
        <Image
          source={require("../../assets/notification-icon.png")}
          className="w-8 self-center h-8 m-2 my-4"
        />
      </TouchableOpacity>
    </View>
  );
};

export default Notifications;
