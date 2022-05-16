import { Text, StyleSheet, View, StatusBar } from "react-native";
import React, { Component } from "react";
import HeaderBar from "../Components/HeaderBar";

export default class Home extends Component {
  render() {
    return (
      <View style={styles.MainScreenContainer}>
        <HeaderBar />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainScreenContainer: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
