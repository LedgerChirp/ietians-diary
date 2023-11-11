import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
const RecentlyVisitedSection = () => {
  const [recentlyVisited, setRecentlyVisited] = useState([]);

  useEffect(() => {
    // Load recently visited items from storage when the component mounts
    loadRecentlyVisited();
  }, []);

  const loadRecentlyVisited = async () => {
    try {
      const storedRecentlyVisited = await AsyncStorage.getItem(
        "recentlyVisited"
      );
      if (storedRecentlyVisited) {
        setRecentlyVisited(JSON.parse(storedRecentlyVisited));
      }
    } catch (error) {
      console.error("Error loading recently visited items:", error);
    }
  };

  const updateRecentlyVisited = async (item) => {
    try {
      // Update the list of recently visited items
      const updatedRecentlyVisited = [
        item,
        ...recentlyVisited.filter((i) => i !== item),
      ];
      setRecentlyVisited(updatedRecentlyVisited);

      // Save the updated list to storage
      await AsyncStorage.setItem(
        "recentlyVisited",
        JSON.stringify(updatedRecentlyVisited)
      );
    } catch (error) {
      console.error("Error updating recently visited items:", error);
    }
  };

  return (
    <View>
      <Text>Recently Visited</Text>
      {recentlyVisited.map((item, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => updateRecentlyVisited(item)}
        >
          <Text>{item}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default RecentlyVisitedSection;
