import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Header({ title }) {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "orange",
    paddingTop: 20,
    paddingBottom: 20,
    marginTop: 28,
    width: 3000,
    zIndex: 100
  },
  text: {
    textAlign: "center",
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
  },
});
