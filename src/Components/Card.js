import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Image,
  Pressable,
} from "react-native";
import React, { useState, useEffect } from "react";
import Animated, {
  useAnimatedStyle,
  interpolate,
  withTiming,
  Easing,
} from "react-native-reanimated";
import {
  FlingGestureHandler,
  Directions,
  State,
} from "react-native-gesture-handler";
import Modal from "./Modal";

const Card = ({
  maxVisibleItems,
  item,
  index,
  dataLength,
  animatedValue,
  currentIndex,
  prevIndex,
}) => {
  const IMAGE_WIDTH = 300;
  const IMAGE_HEIGHT = 200;

  const [isModalVisible, setModalVisible] = useState(false);
  const [randomColor, setRandomColor] = useState();
  const toggleModal = (item) => {
    setModalVisible(!isModalVisible);
  };

  console.log(currentIndex.value);
  console.log(index + 1);
  const animatedStyle = useAnimatedStyle(() => {
    const topValue =
      isModalVisible && currentIndex.value === index ? -260 : undefined;

    const translateY = interpolate(
      animatedValue.value,
      [index - 1, index, index + 1],
      [-70, 1, 30]
    );
    const translateY2 = interpolate(
      animatedValue.value,
      [index - 1, index, index + 1],
      [-200, 1, 200]
    );
    const scale = interpolate(
      animatedValue.value,
      [index - 1, index, index + 1],
      [0.9, 1, 1.1]
    );
    const opacity = interpolate(
      animatedValue.value,
      [index - 1, index, index + 1],
      [1, 1, 0]
    );

    return {
      transform: [
        {
          translateY: index === prevIndex.value ? translateY2 : translateY,
        },
        { scale },
      ],
      opacity:
        index < currentIndex.value + maxVisibleItems - 1
          ? opacity
          : index === currentIndex.value + maxVisibleItems - 1
          ? withTiming(1)
          : withTiming(0),
      position: isModalVisible ? "relative" : "absolute",
      top: withTiming(topValue, {
        duration: 200,
        easing: Easing.inOut(Easing.ease),
      }),
    };
  });
  const modalAnimationStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: isModalVisible
            ? withTiming(-100, {
                duration: 300,
                easing: Easing.inOut(Easing.ease),
              })
            : withTiming(0, {
                duration: 300,
                easing: Easing.inOut(Easing.ease),
              }),
        },
      ],
    };
  });
  useEffect(() => {
    setRandomColor(generateRandomColor());
  }, []);

  const generateRandomColor = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return `rgb(${red},${green},${blue})`;
  };

  return (
    <>
      <FlingGestureHandler
        key="up"
        direction={Directions.UP}
        onHandlerStateChange={(ev) => {
          if (ev.nativeEvent.state === State.END) {
            if (currentIndex.value !== 0) {
              animatedValue.value = withTiming((currentIndex.value -= 1));
              prevIndex.value = currentIndex.value - 1;
            }
          }
        }}
      >
        <FlingGestureHandler
          key="down"
          direction={Directions.DOWN}
          onHandlerStateChange={(ev) => {
            if (ev.nativeEvent.state === State.END) {
              if (currentIndex.value !== dataLength - 1) {
                animatedValue.value = withTiming((currentIndex.value += 1));
                prevIndex.value = currentIndex.value;
              }
            }
          }}
        >
          <Animated.View
            source={item.image}
            style={[
              styles.image,
              {
                zIndex: dataLength - index,
                width: IMAGE_WIDTH,
                height: IMAGE_HEIGHT,
                backgroundColor: "yellow",
                bottom: isModalVisible ? -250 : undefined,
              },
              animatedStyle,
            ]}
          >
            <Pressable
              onPress={() => toggleModal(item)}
              style={{
                width: "100%",
                height: "100%",
                backgroundColor: randomColor,
                borderRadius: 20,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  position: "absolute",
                  top: 30,
                  left: 30,

                  justifyContent: "space-between",
                  alignItems: "center",
                  flexDirection: "row",
                }}
              >
                <Image
                  source={require("../assets/chip.png")}
                  style={{ width: 50, height: 50 }}
                />
                <Image
                  source={require("../assets/visa.png")}
                  style={{ width: 50, height: 50, left: 130 }}
                />
              </View>
              <View
                style={{
                  flexDirection: "column",
                  justifyContent: "space-between",
                  padding: 10,
                  top: 30,
                }}
              >
                <Text
                  style={{ color: "black", fontSize: 20, fontWeight: "bold" }}
                >
                  {item.cardNumber}
                </Text>
                <Text
                  style={{ color: "gray", fontSize: 18, fontWeight: "800" }}
                >
                  {item.cardholderName}
                </Text>
              </View>
            </Pressable>
          </Animated.View>
        </FlingGestureHandler>
      </FlingGestureHandler>

      {isModalVisible && (
        <Modal
          toggleModal={toggleModal}
          isModalVisible={isModalVisible}
          modalAnimationStyle={modalAnimationStyle}
        />
      )}
    </>
  );
};

export default Card;

const styles = StyleSheet.create({
  image: {
    position: "absolute",
    borderRadius: 20,
  },
});
