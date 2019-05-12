import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar} from 'react-native';

import { CardItem, Input, Body } from "native-base";

export default class ShortAnswer extends Component<{}> {

  render() {
    return (
      <View>
        <CardItem>
          <Body>
            <Input />
          </Body>
        </CardItem>
      </View>
    );
  }
}
