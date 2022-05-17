import {
  Text,
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Button,
  TouchableOpacity,
} from "react-native";
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
          <TouchableOpacity onPress={() => {}} style={styles.ViewOfferBtn}>
            <Text style={styles.ViewOfferText}>View Offer</Text>
          </TouchableOpacity>
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
    backgroundColor: "#124559",
  },
  OfferAreaImg: {
    height: 250,
    width: 390,
  },
  OfferText: {
    marginTop: 20,
    fontSize: 20,
    marginLeft: "83%",
    color: "yellow",
    fontWeight: "bold",
  },
  DiscountText: {
    marginTop: 5,
    fontSize: 30,
    marginLeft: "69%",
    color: "red",
    fontWeight: "bold",
  },
  DescriptionText: {
    marginTop: 6,
    fontSize: 17,
    marginLeft: "13%",
    textAlign: "right",
    color: "white",
    fontWeight: "bold",
  },
  ViewOfferBtn: {
    backgroundColor: "orange",
    borderRadius: 20,
    borderColor: "#CB997E",
    borderWidth: 1,
    marginTop: 18,
    marginLeft: "70%",
    elevation: 5,
    padding: 10,
    width: "30%",
  },
  ViewOfferText: {
    textAlign: "center",
    fontWeight: "bold",
  },
});
