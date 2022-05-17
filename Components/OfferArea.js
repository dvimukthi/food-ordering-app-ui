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
          <Text style={styles.DiscountText}>25% Off</Text>
          <Text numberOfLines={2} style={styles.DescriptionText}>
            In honor of World Health Day we'd like to give you this amazing
            offer
          </Text>
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
    marginLeft: "82%",
    color: "yellow",
    fontWeight: "bold",
  },
  DiscountText: {
    fontSize: 30,
    marginLeft: "68%",
    color: "white",
    fontWeight: "bold",
  },
  DescriptionText: {
    fontSize: 17,
    marginLeft: "13%",
    textAlign: "right",
    color: "yellow",
    fontWeight: "400",
  },
});
