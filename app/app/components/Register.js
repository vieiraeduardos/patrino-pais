import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Alert,
  TextInput,
  ScrollView,
  Text,
  Button

} from "react-native";
import Header from './Header';

import AsyncStorage from '@react-native-community/async-storage';

export default class Register extends Component {
  /*Removendo header padrão*/
  static navigationOptions = {
    header: null
  };

  constructor(props){
    super(props);

    this.state = {
      "name": "",
      "email": "",
      "password": "",
      "phone": "",
      "address": ""
    };
  }

  /*Registrando um novo usuário*/
  onRegisterPress() {
    var name = this.state.name;
    var email = this.state.email;
    var password = this.state.password;
    var phone = this.state.phone;
    var address = this.state.address;

    const URL = "http://35.202.173.125";

    return fetch(URL + '/mothers', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name,
          email: email,
          password: password,
          phone: phone,
          address: address
        }),
      })
      .then((response) => response.json())
      .then((responseJson) => {

        this.props.navigation.navigate("Login");
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <Header/>
        <ScrollView>
          <Text>Nome</Text>
          <TextInput onChangeText={(name) => this.setState({name})} />

          <Text>E-mail</Text>
          <TextInput onChangeText={(email) => this.setState({email})} />

          <Text>Telefone</Text>
          <TextInput onChangeText={(phone) => this.setState({phone})} />

          <Text>Senha</Text>
          <TextInput onChangeText={(password) => this.setState({password})} />

          <Text>Endereço</Text>
          <TextInput onChangeText={(address) => this.setState({address})} />

          <Button
            onPress={() => this.onRegisterPress()}
            title="Cadastrar-se"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />

        </ScrollView>
      </View>
    );
  }
}

/*Criando stylesheet*/
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
