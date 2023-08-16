import React from "react";
import { View, Button, Pressable, TextInput, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

export default function StartGameScreen() {
  return (
    <View style={styles.inputContainer}>
      <TextInput />
      <PrimaryButton>Reset</PrimaryButton>
      <PrimaryButton>Confirm</PrimaryButton>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 100,
    marginHorizontal:20,
    padding: 40,
    backgroundColor: "#eeeeee",
    elevation: 4,
    borderRadius: 8,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 5,
    shadowOpacity: 0.1,
  },
});
