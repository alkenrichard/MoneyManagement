import { StyleSheet, Text, View, StatusBar } from "react-native";
import React from "react";
import Card from "./card";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.containerCard}>
        <Card navigation={() => navigation.navigate("Add Card")} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },

  containerCard: {
    marginTop: "20%",
    paddingHorizontal: "10%",
  },
});
