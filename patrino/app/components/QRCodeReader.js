'use strict';

import React, { Component } from 'react';

import {Header, Body, Title} from "native-base";



import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking,
  View
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';

export default class QRCodeReader extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: "#D95D39",
      elevation: null,
      color: "white"
    },
  };

  onSuccess(e) {
    Linking
      .openURL(e.data)
      .catch(err => console.error('Um erro aconteceu!', err));
  }

  render() {
    return (
      <QRCodeScanner
        onRead={this.onSuccess.bind(this)}

      />
    );
  }
}

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
});
