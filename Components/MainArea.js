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
            style={styles.OrangeImage}
            source={require("../Assets/orange.png")}
          />
          <View style={styles.TextContainer}>
            <Text>Fruit</Text>
            <Text>Orange</Text>
            <Text>
              {" "}
              <AntDesign name="star" style={styles.ArrowBtn} size={12} />
              (451 Reviews)
            </Text>
            <Text>$ 4.99</Text>
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
  ImageContainer: {
    height: "40%",
    width: "45%",
    backgroundColor: "red",
    borderTopStartRadius: 90,
    borderTopEndRadius: 90,
    marginTop: 20,
    //alignItems: "center",
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
});
