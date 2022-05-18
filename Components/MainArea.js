import { Text, StyleSheet, View, Image } from "react-native";
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
        <View style={styles.ImageContainer}>
          <Image
            style={styles.image}
            source={require("../Assets/orange.png")}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    margin: 5,
  },
  Container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  FruitText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
  },
  ViewText: {
    textAlignVertical: "center",
    fontSize: 12,
    marginRight: 10,
    fontWeight: "bold",
    color: "orange",
  },
  ArrowBtn: {},
  ImageContainer: {},
});
