import { Text, StyleSheet, View, StatusBar } from "react-native";
import React, { Component } from "react";

export default class Home extends Component {
  render() {
    return (
      <View style={styles.MainScreenContainer}>
        <Text>Home</Text>
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
