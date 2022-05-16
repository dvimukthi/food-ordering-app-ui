import { Text, StyleSheet, View, Image } from "react-native";
import React, { Component } from "react";
import Entypo from "react-native-vector-icons/Entypo";
import Feather from "react-native-vector-icons/Feather";

export default class HeaderBar extends Component {
  render() {
    return (
      <View style={styles.Container}>
        <Entypo name="list" style={styles.ListBtn} size={30} />
        <Feather name="shopping-bag" style={styles.ShoppingBagBtn} size={30} />
        <Image
          style={styles.ProfileImage}
          source={require("../Assets/proPic.jpg")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flexDirection: "row",
    backgroundColor: "orange",
  },
  ListBtn: {},
  ShoppingBagBtn: {},
  ProfileImage: {
    marginLeft: "70%",
    height: 60,
    width: 60,
    borderRadius: 18,
  },
});
