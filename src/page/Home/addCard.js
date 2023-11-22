import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Animated from "react-native-reanimated";

export default function AddCard() {
  return (
    <View style={styles.container}>
      <Animated.View
        style={styles.containerAdd}
        sharedTransitionTag="Add Card"
      ></Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },

  containerAdd: {
    marginTop: "15%",
    marginHorizontal: "10%",
    width: "80%",
    height: 150,
    backgroundColor: "#C1DDFF",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
