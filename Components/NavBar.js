import { Text, StyleSheet, View } from "react-native";
import React, { Component } from "react";
import Octicons from "react-native-vector-icons/Octicons";
import Feather from "react-native-vector-icons/Feather";

export default class NavBar extends Component {
  render() {
    return (
      <View style={styles.Container}>
        <View>
          <Octicons name="home" style={styles.HomeBtn} size={20} />
          <Octicons name="search" style={styles.SearchBtn} size={20} />
          <Feather name="mail" style={styles.MailBtn} size={20} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
