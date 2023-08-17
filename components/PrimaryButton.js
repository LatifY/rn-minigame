import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

export default function PrimaryButton({ children, onPress }) {
  const onPressHandler = (event) => {
    event();
  };

  return (
    <View style={styles.container}>
      <Pressable
        style={(pressData) => pressData.pressed && styles.pressed}
        onPress={() => onPressHandler(onPress)}
        android_ripple={{ color: "#323232" }}
      >
        <Text style={styles.text}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 5,
    padding: 15,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 5,
    shadowOpacity: 0.2,
    verticalAlign: "center",
    justifyContent: "center",
    backgroundColor: "#41444B",
    borderRadius: 8,
  },
  text: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },

  pressed: {
    opacity: 0.7
  }
});
