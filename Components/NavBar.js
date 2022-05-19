import { Text, StyleSheet, View } from "react-native";
import React, { Component } from "react";
import Octicons from "react-native-vector-icons/Octicons";

export default class NavBar extends Component {
  render() {
    return (
      <View style={styles.Container}>
        <View>
          <Octicons name="home" style={styles.homeBtn} size={20} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
