import { Text, StyleSheet, View } from "react-native";
import React, { Component } from "react";
import AntDesign from "react-native-vector-icons/AntDesign";

export default class MainArea extends Component {
  render() {
    return (
      <View style={styles.Container}>
        <Text style={styles.FruitText}>Fruits</Text>
        <Text style={styles.ViewText}>
          View All{" "}
          <AntDesign name="arrowright" style={styles.ArrowBtn} size={30} />
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    backgroundColor: "red",
  },
  FruitText: {
    fontSize: 18,
  },
  ViewText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "orange",
  },
  ArrowBtn: {},
});
