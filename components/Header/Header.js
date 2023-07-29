import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
// import { Overlay } from "expo";
import React, { useState } from "react";
import { Userpic } from "react-native-userpic";
import Notifications from "../Notifications/Notifications";
import Menu from "./Menu";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <SafeAreaView top={0}>
      {showMenu && <Menu />}
      <View className="flex-row justify-between items-start">
        <View className="">
          <Image
            source={require("../../assets/Logo.png")}
            className="w-28 h-28 m-2"
          />
        </View>
        <View className="flex-row mt-8 ">
          <Notifications />
          <TouchableOpacity onPress={handleShowMenu}>
            <Userpic
              source={{
                uri: "https://avatars.githubusercontent.com/u/98788439?v=4",
              }}
              email={"mustafaazad533@gmail.com" || "mohitaasirwal@gmail.com"}
              className="h-8 w-8 my-3 mx-2"
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Header;
