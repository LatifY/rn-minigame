import { StatusBar } from "expo-status-bar";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import { LinearGradient } from "expo-linear-gradient";

//screens
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";

import { useEffect, useState } from "react";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {
  const [loaded] = useFonts({
    "ms_medium": require("./assets/fonts/Montserrat-Medium.ttf"),
    "ms_regular": require("./assets/fonts/Montserrat-Regular.ttf"),
    "ms_bold": require("./assets/fonts/Montserrat-Bold.ttf"),
    "ms_extrabold": require("./assets/fonts/Montserrat-ExtraBold.ttf"),
  });

  let screen;

  const [pickedNumber, setPickedNumber] = useState();
  const [isGameOver, setIsGameOver] = useState(false)
  const [guessedNumberCount, setguessedNumberCount] = useState(0)

  const pickedNumberHandler = (number) => {
    setPickedNumber(number);
    setIsGameOver(false)
  };

  const guessedNumberCountHandler = (count) => {
    setguessedNumberCount(count)
  }

  const restartGameHandler = () => {
    setPickedNumber()
    setIsGameOver(false)
  }

  screen = <StartGameScreen pickNumber={pickedNumberHandler} />;

  if (pickedNumber && !isGameOver) {
    screen = <GameScreen number={pickedNumber} setIsGameOver={setIsGameOver} guessedNumberCountHandler={guessedNumberCountHandler}/>;
  }

  if(pickedNumber && isGameOver){
    screen = <GameOverScreen number={pickedNumber} guessedNumberCount={guessedNumberCount} restartGameHandler={restartGameHandler} />
  }

  if (!loaded) {
    return null;
  }

  return (
    <LinearGradient colors={["#ffffff", "#f5f5f5"]} style={styles.root}>

      <SafeAreaView style={styles.root}>{screen}</SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  root: {
    flex: 1,
  },

});
