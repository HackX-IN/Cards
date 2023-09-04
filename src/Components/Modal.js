import React from "react";
import Animated, {
  Easing,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { StyleSheet, TouchableOpacity, View, Text, Image } from "react-native";
import Button from "./Button";
import BarChart from "./barchart";
import Details from "./Details";
function Modal({ isModalVisible, toggleModal, modalAnimationStyle, item }) {
  // console.log(item);
  return (
    <Animated.View style={[styles.modalContainer, modalAnimationStyle]}>
      <View style={styles.top}>
        <Button
          title="Send"
          image={require("../assets/up-arrow.png")}
          toggleModal={toggleModal}
        />
        <Button
          title="Request"
          image={require("../assets/recieved.png")}
          toggleModal={toggleModal}
        />
        <Button
          title="Pay"
          image={require("../assets/qr-code.png")}
          toggleModal={toggleModal}
        />
      </View>
      <View style={styles.card}>
        <BarChart toggleModal={toggleModal} />

        <View style={{ flexDirection: "column", alignItems: "center", gap: 8 }}>
          <Details title="Friends" />
          <Details title="Total Income" month="$12,00,000" />
        </View>
      </View>
    </Animated.View>
  );
}

export default Modal;

const styles = StyleSheet.create({
  modalContainer: {
    top: 100,
    height: "120%",
    width: "100%",

    zIndex: 50,
    backgroundColor: "#Fcedf8",
  },
  top: {
    flexDirection: "row",
    gap: 8,
    padding: 8,
    paddingHorizontal: 32,
  },
  card: {
    paddingHorizontal: 16,
    justifyContent: "space-between",
    alignItems: "center",
    padding: 8,
    margin: 6,
    flexDirection: "row",
    flex: 0.5,
  },
});
