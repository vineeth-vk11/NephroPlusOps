import React, { useState, useEffect } from "react";
import { ImageBackground, Keyboard } from "react-native";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";

import { Dimensions } from "react-native";
import { ScreenHeight } from "react-native-elements/dist/helpers";

import OtpInputs from 'react-native-otp-inputs';

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const OtpInput = ({ navigation }) => {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <SafeAreaView style={styler.screen}>
        <View style={styler.havoc}>
          <Image source={require("../Images/logo.png")} />
        </View>
        <View style={styler.phoneInput}>
          <Text style={styler.signInText}>Enter OTP</Text>
          <OtpInputs
            handleChange={(code) => console.log(code)}
            numberOfInputs={4}
          />
        </View>
        <View style={styler.sendOtpView}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Orders")
            }}
          >
            <Text style={styler.sendOtp}>Get OTP</Text>
          </TouchableOpacity>
        </View>

      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default OtpInput;

const styler = StyleSheet.create({
  screen: {
    alignItems: "center",
    flex: 1,
  },
  sendOtp: {
    width: windowWidth,
    height: 0.065 * windowHeight,
    backgroundColor: "#7AC141",
    color: "white",
    textAlign: "center",
    textAlignVertical: "center",
    alignContent: "center",
    alignItems: "center",
    fontSize: 20,
    elevation: 5,
    padding: 10,
    overflow: "hidden",
    paddingVertical: 0.02 * ScreenHeight,
  },
  havoc: {
    flex: 0.4,
    justifyContent: "center",
  },
  phoneInput: {
    flex: 0.4,
    justifyContent: "flex-start",
  },
  sendOtpView: {
    flex: 0.2,
    justifyContent: "flex-end"
  },
  signInText: {
    alignSelf: "center",
    marginBottom: 32,
    fontSize: 24
  }
});
