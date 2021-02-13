import React from "react";
import { StyleSheet, View, TextInput } from "react-native";

//Component Import
import Header from "./components/Header"; //Header
import CalculationWidget from "./components/CalculationWidget"; //Widget to Display and Calculate BMI

export default function App() {
  return (
    <View style={styles.container}>
      <Header title="BMI Calculator" /> 
      <CalculationWidget />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
});
