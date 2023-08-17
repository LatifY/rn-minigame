import React, { useState } from "react";
import { View, Button, Pressable, TextInput, StyleSheet, Image, Alert, AlertButton} from "react-native";
import PrimaryButton from "../components/PrimaryButton";


export default function StartGameScreen({pickNumber}) {
  const [number, setNumber] = useState();
  let alertButtons = [{text: "Sorry", style:"destructive"}]
  const resetNumber = () => {
    setNumber()
  }

  const confirmNumber = () => {
    const choosenNumber = parseInt(number)
    if(isNaN(choosenNumber)){
      Alert.alert("Error", "Please provide a number.", alertButtons)
    }
    else if(number === 0){
      Alert.alert("Error", "Number cannot be zero :)", alertButtons)
    }
    else if(number < 0 || number >= 100){
      Alert.alert("Error", "Number should be between 0-100", alertButtons)
    }
    else{
      pickNumber(choosenNumber)
    }
    return;
  }

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          value={number}
          onChangeText={(e) => setNumber(e)}
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCorrect={false}
          autoCapitalize="none"
          returnKeyType="done"
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={resetNumber}>
              reset
            </PrimaryButton>
          </View>

          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={confirmNumber}>
              confirm
            </PrimaryButton>
          </View>
        </View>
      </View>

      <Image style={styles.image} source={require("../assets/images/marshmallow.png")}  />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },

  image: {
    position: "absolute",
    objectFit: "scale-down",
    width: 250,
    right: 0,
    bottom: -150,
  },

  inputContainer: {
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginHorizontal: 20,
    padding: 30,
    backgroundColor: "#eeeeee",
    elevation: 4,
    borderRadius: 8,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 5,
    shadowOpacity: 0.1,
  },
  buttonsContainer: {
    marginTop: 20,
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },

  numberInput: {
    height: 60,
    fontSize: 30,
    borderColor: "#ccc",
    backgroundColor: "#e3e3e3",
    borderWidth: 4,
    borderRadius: 80,
    width: "60%",
    fontFamily: "ms_bold",
    textAlign: "center",
    fontWeight: "bold",
  },
});
