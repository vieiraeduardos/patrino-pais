import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Alert,
  TextInput,
  ScrollView,
  Text,
  Button,
  BackHandler
} from "react-native";

import AsyncStorage from '@react-native-community/async-storage';

export default class Settings extends Component {
  /*Removendo header padrão*/
  static navigationOptions = {
    header: null
  };

  constructor(props){
    super(props);

    this.state = {
      "code": "",
      "name": "",
      "email": "",
      "password": "",
      "phone": "",
      "address": ""
    };
  }

  componentDidMount() {
    this.onLoadCode();
  }

  async sair() {
    await AsyncStorage.setItem("email", "");
    await AsyncStorage.setItem("password", "");
    await AsyncStorage.setItem("logging", "false");

    BackHandler.exitApp();
    return true;
  };

  /*Carregar code de usuário*/
  async onLoadCode() {
    var code = await AsyncStorage.getItem("code");

    this.setState({
      "code": code
    });
  }

  render() {
    const navigation = this.props.navigation.state.params.navigation;

    return (
      <View>

        <Button
          onPress={() => navigation.navigate("Edit") }
          title="Editar perfil"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />

        <Button
          onPress={() => this.sair() }
          title="Sair"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />

      </View>
    );
  }
}

/*Criando style sheet*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
