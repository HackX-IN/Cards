import React from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";

const BarChart = ({ toggleModal }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={toggleModal}>
      <Text style={{ fontSize: 12, fontWeight: "600", color: "gray" }}>
        Weekly Activity
      </Text>
      <Image
        source={require("../assets/bar.png")}
        style={{
          width: 200,
          height: 160,
          resizeMode: "contain",
        }}
      />
      <Text style={{ fontSize: 12, fontWeight: "600", color: "gray" }}>
        This Week
      </Text>
      <Text style={{ fontSize: 18, fontWeight: "900", color: "black" }}>
        $1,043.09
      </Text>
    </TouchableOpacity>
  );
};

export default BarChart;

const styles = StyleSheet.create({
  card: {
    flexDirection: "column",

    width: "60%",
    height: "100%",
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 8,
  },
});
