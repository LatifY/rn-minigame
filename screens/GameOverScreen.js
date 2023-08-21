import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import Wobblify from "react-native-wobblifier";

export default function GameOverScreen({ restartGameHandler,guessedNumberCount, number }) {
  return (
    <View style={styles.container}>
      <View style={styles.glad}>
        <Wobblify>
          <Text style={styles.gladText}>Yeeeeeee 🎉</Text>
        </Wobblify>
        <Wobblify>
          <Image
            style={styles.gladImage}
            source={require("../assets/images/muffin.png")}
          />
        </Wobblify>
      </View>

      <View style={styles.info}>
        <Text style={styles.infoText}>
          <Text style={styles.infoTextBold}>{guessedNumberCount}</Text> guesses used! {"\n"}
          Your number: <Text style={styles.infoTextBold}>{number}</Text>
        </Text>
        <PrimaryButton onPress={restartGameHandler}>
          start again
        </PrimaryButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
  },

  glad: {
    width: "100%",
  },

  gladText: {
    fontSize: 36,
    textAlign: "center",
    marginVertical: 20,
    fontWeight: "800",
    letterSpacing: -1,
  },

  gladImage: {
    width: 270,
    objectFit: "scale-down",
  },

  infoText: {
    marginVertical: 20,
    fontSize: 30,
    textAlign: "center",
    color: "#444444",
    fontWeight: "600"
  },

  infoTextBold: {
    color: "black",
    fontWeight: "900",
    fontSize: 32
  }
});
