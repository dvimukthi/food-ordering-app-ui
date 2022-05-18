import { Text, StyleSheet, View, Image } from "react-native";
import React, { Component } from "react";
import AntDesign from "react-native-vector-icons/AntDesign";

export default class MainArea extends Component {
  render() {
    return (
      <View style={styles.MainContainer}>
        <View style={styles.Container}>
          <Text style={styles.FruitsText}>Fruits</Text>
          <Text style={styles.ViewText}>
            View All{" "}
            <AntDesign name="arrowright" style={styles.ArrowBtn} size={12} />
          </Text>
        </View>
        <View style={styles.ImageContainer}>
          <Image
            style={styles.OrangeImage}
            source={require("../Assets/orange.png")}
          />
          <View style={styles.TextContainer}>
            <Text style={styles.FruitText}>FRUIT</Text>
            <Text style={styles.FruitNameText}>Orange</Text>
            <Text style={styles.Reviews}>
              {" "}
              <AntDesign name="star" style={styles.StarBtn} size={18} />
              (451 Reviews)
            </Text>
            <View style={styles.PriceContainer}>
              <Text style={styles.Price}>$4.99</Text>
              <Text style={styles.Weight}>per Kg</Text>
            </View>
          </View>
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
  FruitsText: {
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
  ImageContainer: {
    height: "40%",
    width: "45%",
    backgroundColor: "red",
    borderTopStartRadius: 90,
    borderTopEndRadius: 90,
    marginTop: 20,
  },
  OrangeImage: {
    alignSelf: "center",
    height: 120,
    width: 140,
  },
  TextContainer: {
    marginTop: 15,
    borderBottomStartRadius: 20,
    borderBottomEndRadius: 20,
    backgroundColor: "green",
  },
  FruitText: {
    fontSize: 14,
    color: "yellow",
    marginLeft: 10,
  },
  FruitNameText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
  },
  Reviews: {
    color: "orange",
    marginLeft: 7,
  },
  StarBtn: {
    color: "yellow",
  },
  Price: {
    marginTop: 5,
    marginLeft: 10,
    color: "orange",
    fontSize: 22,
    fontWeight: "bold",
  },
  Weight: {},
});
