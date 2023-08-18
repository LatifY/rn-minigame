import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function GameScreen({ number }) {
  return (
    <View style={styles.screen}>
      <Text style={styles.goofyTitle}>hmmmmm...</Text>
      <View style={styles.guessGIFContainer}>
        <Text style={styles.guessText}>60</Text>
        <Image
          style={styles.guessGIF}
          source={require("../assets/images/test.gif")}
        />
      </View>

      <View></View>

      <Image
        style={styles.image}
        source={require("../assets/images/think.png")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },

  guessText: {
    position: "absolute",
    fontSize: 60,
    zIndex: 2,
    fontWeight: 700 
  },

  guessGIFContainer: {
    width: "80%",
    margin: 20,
    justifyContent:"center",
    alignItems:"center",
    borderColor: "black",
    borderWidth: 10
  },

  guessGIF: {
    width: "100%",
    height: 200,
    borderColor: "black",
  },

  goofyTitle: {
    fontSize: 40,
    fontWeight: "bold",
    marginLeft: 20,
    marginTop: 20,
  },

  image: {
    position: "absolute",
    objectFit: "scale-down",
    width: 250,
    left: -30,
    bottom: -60,
  },
});
