import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign, Entypo } from "@expo/vector-icons";

import React from "react";

const About = () => {
  const { navigate } = useNavigation();
  const onPressBack = () => {
    navigate("Settings");
  };
  return (
    <View>
      <View className="py-4 mt-14 px-6 space-x-28 flex flex-row justify-start items-center">
        <AntDesign
          name="left"
          size={18}
          color="black"
          className=""
          onPress={onPressBack}
        />
        <Text className="text-base font-bold">About</Text>
      </View>
      <ScrollView>
        <View className="flex flex-col justify-center items-center">
          <Image
            source={require("../../assets/Logo.png")}
            className="w-40 h-40"
          />
          <Text className="text-base mx-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            officia nihil, suscipit culpa enim quia odio a similique est quod
            nulla eum optio reiciendis numquam. Ut repellat eaque quam impedit,
            mollitia excepturi quisquam ducimus vitae quidem, illum inventore
            consectetur blanditiis voluptate esse odit? Rem dolorum iure neque
            aspernatur doloribus non.
          </Text>
          <View className="my-10 flex flex-col justify-start items-start space-y-3">
            <Text className="text-xl">Developers</Text>
            <TouchableOpacity className="flex flex-row justify-evenly">
              <Image
                source={require("../../assets/Icons/mohit.png")}
                className="w-20 h-20"
              />
              <Text className="text-2xl">Mohit Aasirwal</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex flex-row justify-evenly">
              <Image
                source={require("../../assets/Icons/mohit.png")}
                className="w-20 h-20"
              />
              <Text className="text-2xl">Mustafa Azad</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex flex-row justify-evenly">
              <Image
                source={require("../../assets/Icons/mohit.png")}
                className="w-20 h-20"
              />
              <Text className="text-2xl">Kanishk Tiwari</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex flex-row justify-evenly">
              <Image
                source={require("../../assets/Icons/mohit.png")}
                className="w-20 h-20"
              />
              <Text className="text-2xl">Huzaifa Qureshi</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex flex-row justify-evenly">
              <Image
                source={require("../../assets/Icons/mohit.png")}
                className="w-20 h-20"
              />
              <Text className="text-2xl">Anuj Malviya</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default About;
