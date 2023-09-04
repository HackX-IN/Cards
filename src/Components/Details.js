import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
const Details = ({ title, month }) => {
  return (
    <View style={styles.card}>
      <Text style={{ fontSize: 16, fontWeight: "600", color: "gray" }}>
        {title}
      </Text>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
        {month ? (
          <View>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "600",
                color: "black",
                marginTop: 16,
              }}
            >
              {month}
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontWeight: "300",
                color: "gray",
                marginTop: 4,
              }}
            >
              This month
            </Text>
          </View>
        ) : (
          <>
            <View
              style={{ flexDirection: "column", alignItems: "center", gap: 4 }}
            >
              <Image
                style={{ width: 40, height: 40 }}
                source={require("../assets/woman.png")}
              />
              <Text style={{ fontSize: 14, color: "gray", fontWeight: "500" }}>
                Ruth
              </Text>
            </View>
            <View
              style={{ flexDirection: "column", alignItems: "center", gap: 4 }}
            >
              <Image
                style={{ width: 40, height: 40 }}
                source={require("../assets/woman.png")}
              />
              <Text style={{ fontSize: 14, color: "gray", fontWeight: "500" }}>
                Ruth
              </Text>
            </View>
            <View
              style={{ flexDirection: "column", alignItems: "center", gap: 4 }}
            >
              <Image
                style={{ width: 40, height: 40 }}
                source={require("../assets/woman.png")}
              />
              <Text style={{ fontSize: 14, color: "gray", fontWeight: "500" }}>
                Ruth
              </Text>
            </View>
          </>
        )}
      </View>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  card: {
    width: 150,
    height: 100,
    backgroundColor: "white",
    borderRadius: 12,
    flexDirection: "column",
    padding: 8,
    left: 10,
  },
});
