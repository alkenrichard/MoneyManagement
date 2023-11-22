import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Animated, {
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

export default function Cards({ item, viewableItems }) {
  const rStyle = useAnimatedStyle(() => {
    const isVisible = viewableItems.value
      .filter((item) => item.isViewable)
      .find((viewableItem) => viewableItem.item.id === item.id);

    return {
      width: withTiming(isVisible ? "100%" : "0%"),
      opacity: withTiming(isVisible ? 1 : 0),
    };
  }, []);

  return (
    <View style={{ alignItems: "center" }}>
      <Animated.View style={[styles.card, rStyle]} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    height: 150,
    backgroundColor: "red",
    // marginTop: 10,
  },
});
