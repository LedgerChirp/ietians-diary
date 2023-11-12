import React from "react";
import { View, StyleSheet } from "react-native";

const HorizontalRule = () => {
  return <View style={styles.horizontalRule} />;
};

const styles = StyleSheet.create({
  horizontalRule: {
    borderBottomColor: "black",
    borderBottomWidth: 0.21,
  },
});

export default HorizontalRule;
