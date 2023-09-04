import React from "react";

import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";

const Button = ({ title, image, toggleModal }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={toggleModal}>
      <View style={styles.center}>
        <Image source={image} style={{ width: 20, height: 20 }} />
      </View>
      <Text
        style={{
          color: "black",
          fontSize: 14,
          fontWeight: "600",
          paddingTop: 8,
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    padding: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff2fd",
    height: 110,
    width: 110,
    borderRadius: 22,
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
  },
});
