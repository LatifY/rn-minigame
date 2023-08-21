import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, Alert } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import Wobblifier from "react-native-wobblifier/lib/Wobblifier";

const generateRandomBetween = (min, max, exclude) => {
  const rnd = Math.floor(Math.random() * (max - min)) + min;
  if (rnd === exclude) {
    return generateRandomBetween(min, max, exclude);
  }
  return rnd;
};

let boundaryMin = 1;
let boundaryMax = 100;

const Directions = {
  Lower: 0,
  Higher: 1,
};

export default function GameScreen({
  number,
  isGameOver,
  setIsGameOver,
  guessedNumberCountHandler,
}) {
  const initialGuess = generateRandomBetween(1, 100, number);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessedNumbers, setGuessedNumbers] = useState([currentGuess]);

  const lieCheck = (direction) => {
    if (direction === Directions.Lower && currentGuess < number) {
      return true;
    }

    if (direction === Directions.Higher && currentGuess > number) {
      return true;
    }

    return false;
  };

  useEffect(() => {
    gameOverCheck();
  }, [currentGuess, number]);

  const gameOverCheck = () => {
    if (currentGuess === number) {
      setIsGameOver(true);
      guessedNumberCountHandler(guessedNumbers.length)
    }
  };

  const guessHandler = (direction) => {
    if (isGameOver) {
      return;
    }

    const isLying = lieCheck(direction);
    if (isLying) {
      Alert.alert("dont lie bruh", "what is wrong with you??", [
        { text: "sorry", style: "destructive" },
      ]);
      return;
    }

    if (direction === Directions.Lower) {
      boundaryMax = currentGuess;
    } else if (direction === Directions.Higher) {
      boundaryMin = currentGuess + 1;
    }

    const newRnd = generateRandomBetween(
      boundaryMin,
      boundaryMax,
      currentGuess
    );
    setCurrentGuess(newRnd);
    setGuessedNumbers([...guessedNumbers, currentGuess]);
  };

  return (
    <View style={styles.screen}>
      <Text style={styles.goofyTitle}>hmmmmm...</Text>
      <View style={styles.guessGIFContainer}>
        <Text style={styles.guessText}>{currentGuess}</Text>
        <Image
          style={styles.guessGIF}
          source={require("../assets/images/test.gif")}
        />
      </View>

      <View style={styles.controls}>
        <Text style={styles.controlText}>Higher or Lower?</Text>
        <Text style={styles.controlTextSmall}>( don't lie to me :D )</Text>
        <View style={styles.controlButtons}>
          <View style={styles.controlButton}>
            <PrimaryButton
              style={{ fontSize: 30 }}
              onPress={() => guessHandler(Directions.Higher)}
            >
              +
            </PrimaryButton>
          </View>

          <View style={styles.controlButton}>
            <PrimaryButton onPress={() => guessHandler(Directions.Lower)}>
              -
            </PrimaryButton>
          </View>
        </View>
      </View>

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

  controls: {
    padding: 20,
    width: "100%",
    backgroundColor: "#e9e9e9",
  },

  controlText: {
    fontSize: 24,
    fontWeight: "700",
  },

  controlTextSmall: { color: "black", opacity: 0.35, marginVertical: 5 },

  controlButtons: {
    marginTop: 30,
    gap: 10,
    width: "100%",
    flexDirection: "row",
  },

  controlButton: {
    flex: 1,
  },

  guessText: {
    position: "absolute",
    fontSize: 60,
    zIndex: 2,
    fontWeight: "700",
  },

  guessGIFContainer: {
    width: "90%",
    marginVertical: 20,
    marginLeft: 20,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "black",
    borderWidth: 10,
  },

  guessGIF: {
    width: "100%",
    height: 201,
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
