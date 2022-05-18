import { Text, StyleSheet, View } from "react-native";
import React, { Component } from "react";
import AntDesign from "react-native-vector-icons/AntDesign";

export default class MainArea extends Component {
  render() {
    return (
      <View style={styles.MainContainer}>
        <View style={styles.Container}>
          <Text style={styles.FruitText}>Fruits</Text>
          <Text style={styles.ViewText}>
            View All{" "}
            <AntDesign name="arrowright" style={styles.ArrowBtn} size={12} />
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {},
  Container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  FruitText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  ViewText: {
    textAlignVertical: "center",
    fontSize: 12,
    fontWeight: "bold",
    color: "orange",
  },
  ArrowBtn: {},
});
