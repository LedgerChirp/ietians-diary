import { View, Text } from "react-native";
import React from "react";
import Notes from "../components/Material/Notes";
import SearchBar from "../components/Material/Search";
import Header from "../components/Header/Header";

const NotesScreen = () => {
  return (
    <>
      <View className="bg-white">
        <Header />
        <SearchBar />
        <Notes screenName={"Notes"} />
      </View>
    </>
  );
};

export default NotesScreen;
