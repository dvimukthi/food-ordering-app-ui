import { Text, StyleSheet, View, StatusBar } from "react-native";
import React, { Component } from "react";
import HeaderBar from "../Components/HeaderBar";
import OfferArea from "../Components/OfferArea";
import MainArea from "../Components/MainArea";
import NavBar from "../Components/NavBar";

export default class Home extends Component {
  render() {
    return (
      <View style={styles.MainScreenContainer}>
        <HeaderBar />
        <OfferArea />
        <MainArea />
        <NavBar />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainScreenContainer: {
    backgroundColor: "#6c584c",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
