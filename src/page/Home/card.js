import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  FlatList,
} from "react-native";
import { useState, useRef } from "react";
import React from "react";
import Animated, { useSharedValue } from "react-native-reanimated";
import Cards from "./cards";

export default function Card({ navigation }) {
  const card = new Array(50).fill(0).map((_, index) => ({
    id: index,
  }));
  const cardRef = useRef(null);

  const viewableItems = useSharedValue([]);

  const handleScrollTo = (event) => {
    const index = Math.floor((event.nativeEvent.contentOffset.y + 75) / 150);
    cardRef.current.scrollToIndex({ index, animated: true });
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={navigation}>
        <Animated.View
          style={styles.containerAdd}
          sharedTransitionTag="Add Card"
        >
          <View style={styles.addHorizontal} />
          <View style={styles.addVertical} />
        </Animated.View>
      </TouchableWithoutFeedback>
      <View style={styles.containerCard}>
        <FlatList
          ref={cardRef}
          data={card}
          showsVerticalScrollIndicator={false}
          onMomentumScrollEnd={handleScrollTo}
          onViewableItemsChanged={({ viewableItems: vItems }) => {
            viewableItems.value = vItems;
          }}
          renderItem={({ item }) => {
            return <Cards item={item} viewableItems={viewableItems} />;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    height: 150,
    justifyContent: "space-between",
  },

  containerAdd: {
    width: "20%",
    height: "100%",
    backgroundColor: "#C1DDFF",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  addHorizontal: {
    backgroundColor: "black",
    width: 25,
    height: 5,
    borderRadius: 10,
  },

  addVertical: {
    backgroundColor: "black",
    height: 25,
    width: 5,
    borderRadius: 10,
    position: "absolute",
  },

  containerCard: {
    gap: 10,
    height: 150,
    width: "75%",
    flexDirection: "row",
  },
});
