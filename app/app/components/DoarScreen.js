import React, {Component} from "react";

import {View} from "react-native";

import {Button} from "react-native-elements";

import AsyncStorage from '@react-native-community/async-storage';

export default class DoarScreen extends Component {
  async doar() {
      const code = await AsyncStorage.getItem("code");

      console.log("Doando!");
      console.log(code);
  }

  render() {
    return(
      <View>
        <Button
          onPress={() => this.doar()}
          title="Doar"
        />
      </View>
    );
  }
}
