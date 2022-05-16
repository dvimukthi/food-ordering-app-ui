import { Text, StyleSheet, View, Image } from "react-native";
import React, { Component } from "react";

export default class OfferArea extends Component {
  render() {
    return (
      <View style={styles.Container}>
        <Image
          style={styles.ProfileImage}
          source={require("../Assets/grapes.png")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {},
});
