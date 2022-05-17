import { Text, StyleSheet, View, Image, ImageBackground } from "react-native";
import React, { Component } from "react";

export default class OfferArea extends Component {
  render() {
    return (
      <View style={styles.Container}>
        <ImageBackground
          style={styles.OfferAreaImg}
          source={require("../Assets/grapes.png")}
        >
          <Text style={styles.OfferText}>OFFER</Text>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    marginTop: 30,
    height: 250,
    width: "auto",
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 25,
    backgroundColor: "red",
  },
  OfferAreaImg: {
    height: 250,
    width: 370,
  },
  OfferText: {
    fontSize: 20,
    marginLeft: "80%",
    color: "yellow",
    fontWeight: "bold",
  },
});
