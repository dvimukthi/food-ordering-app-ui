import { Text, StyleSheet, View, Image } from "react-native";
import React, { Component } from "react";

export default class OfferArea extends Component {
  render() {
    return (
      <View style={styles.Container}>
        <Image
          style={styles.OfferAreaImg}
          source={require("../Assets/grapes.png")}
        />
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
    backgroundColor: "red",
  },
  OfferAreaImg: {
    height: 250,
    width: 500,
    marginLeft: 80,
  },
});
