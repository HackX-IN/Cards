/* eslint-disable react-native/no-inline-styles */
import { StyleSheet, SafeAreaView, Image, StatusBar } from "react-native";
import React, { useEffect, useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import CardContainer from "./src/Components/CardContainer";
import { Text } from "react-native";
import { View } from "react-native";
import { Data } from "./Data";
const StackCarouselScreen = () => {
  const [debitCards, setDebitCards] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/debitCards")
      .then((response) => response.json())
      .then((data) => setDebitCards(data))
      .catch((error) => console.log("Error fetching data:", error));
  }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.header}>
        <Image
          source={require("./src/assets/woman.png")}
          style={styles.image}
        />
        <Text style={styles.Headertext}>Clearly</Text>
        <Image
          source={require("./src/assets/search.png")}
          style={styles.image1}
        />
      </View>
      <View style={styles.container1}>
        <Text style={styles.text}>Manage Your </Text>
        <Text style={styles.text1}>cards</Text>
      </View>
      <SafeAreaView style={styles.container}>
        <CardContainer data={Data} maxVisibleItems={4} />
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default StackCarouselScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  container1: {
    flex: 0.5,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 25,

    fontWeight: "600",
  },
  text1: {
    fontSize: 25,

    fontWeight: "600",
  },
  header: {
    marginTop: StatusBar.currentHeight,
    backgroundColor: "white",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    padding: 10,
  },
  Headertext: {
    fontSize: 25,

    fontWeight: "900",
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },
  image1: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },
});
