import { View, Text } from "react-native";
import React from "react";
import Pyq from "../components/Material/Pyq";
import SearchBar from "../components/Material/Search";
import Header from "../components/Header/Header";

const PyqScreen = () => {
  return (
    <>
      <View className="bg-white">
        <Header />
        <SearchBar />
        <Pyq />
      </View>
    </>
  );
};

export default PyqScreen;
