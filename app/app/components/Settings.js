import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Alert,
  TextInput,
  ScrollView,
  Label,
  Button,
  Text,
  
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

  /*Carregar code de usuário*/
  async onLoadCode() {
    var code = await AsyncStorage.getItem("code");

    this.setState({
      "code": code
    });
  }

  /*Atualizando informações pessoais do usuário*/
  onUpdatePress() {
    var code = this.state.code;
    var name = this.state.name;
    var email = this.state.email;
    var password = this.state.password;
    var phone = this.state.phone;
    var address = this.state.address;

    return fetch('http://192.168.1.9:1234/users', {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          code: code,
          name: name,
          email: email,
          password: password,
          phone: phone,
          address: address
        }),
      })
      .then((response) => response.json())
      .then((responseJson) => {

        this.props.navigation.navigate("HomeScreen");
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <View>
        <ScrollView>
          <Label>Nome</Label>
          <TextInput onChangeText={(name) => this.setState({name})} />

          <Label>E-mail</Label>
          <TextInput onChangeText={(email) => this.setState({email})} />

          <Label>Telefone</Label>
          <TextInput onChangeText={(phone) => this.setState({phone})} />

          <Label>Senha</Label>
          <TextInput onChangeText={(password) => this.setState({password})} />

          <Label>Endereço</Label>
          <TextInput onChangeText={(address) => this.setState({address})} />

          <Button success style={{ margin: 10 }}
            onPress={() => this.onUpdatePress()}
          >
            <Text>Atualizar</Text>
          </Button>
        </ScrollView>
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
