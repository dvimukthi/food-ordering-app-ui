import { Text, StyleSheet, View } from "react-native";
import React, { Component } from "react";
import Octicons from "react-native-vector-icons/Octicons";
import Feather from "react-native-vector-icons/Feather";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default class NavBar extends Component {
  render() {
    return (
      <View style={styles.Container}>
        <View style={styles.IconContainer}>
          <Feather name="home" style={styles.HomeBtn} size={30} />
          <Octicons name="search" style={styles.SearchBtn} size={30} />
          <Feather name="mail" style={styles.MailBtn} size={30} />
          <MaterialCommunityIcons
            name="dots-vertical"
            style={styles.DotsBtn}
            size={30}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    alignItems: "center",
  },
  IconContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 50,
    marginBottom: 60,
    marginHorizontal: 10,
    backgroundColor: "orange",
    height: 50,
    width: "40%",
  },
});
