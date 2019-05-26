import React, { Component } from "react";
import { AppRegistry, Dimensions, StyleSheet, View, FlatList, Image, Alert, TextInput, TouchableOpacity, Linking, ScrollView } from "react-native";

import {Form, Content, Accordion, Thumbnail, Container, Item, Input, Header, Label, Left, Body, Icon, Button, Text, Tabs, Tab, Right, Title, Card, CardItem, Badge } from "native-base";

import AsyncStorage from '@react-native-community/async-storage';

import { StackNavigator } from "react-navigation";

export default class Settings extends Component {
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

  async onLoadCode() {
    var code = await AsyncStorage.getItem("code");

    console.debug(code);

    this.setState({
      "code": code
    });
  }

  componentDidMount() {
    this.onLoadCode();
  }

  onRegisterPress() {
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
      <Container>
        <Header>
          <Left>
            <Image style={styles.logo} source={require("./heart.png")} />
          </Left>
          <Body>
            <Title>Patrino</Title>
          </Body>

        </Header>

        <ScrollView>
          <Form>
            <Label>Nome</Label>
            <Input onChangeText={(name) => this.setState({name})} />

            <Label>E-mail</Label>
            <Input onChangeText={(email) => this.setState({email})} />

            <Label>Telefone</Label>
            <Input onChangeText={(phone) => this.setState({phone})} />

            <Label>Senha</Label>
            <Input onChangeText={(password) => this.setState({password})} />

            <Label>Endereço</Label>
            <Input onChangeText={(address) => this.setState({address})} />

            <Button success style={{ margin: 10 }}
              onPress={() => this.onRegisterPress()}
            >
              <Text>Atualizar</Text>
            </Button>

          </Form>
        </ScrollView>
      </Container>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "white"
  },
  logoContainer: {
    alignItems: "center",
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  logo: {
    width: 30,
    height: 30
  },
  subtext: {
    color: "black",
    marginTop: 10,
    width: 160,
    textAlign: "center",
    opacity: 0.8
  },
  keyboard: {
    margin: 20,
    padding: 20,
    alignSelf: "stretch"
  },
  buttonContainer: {
    width: '70%',
    justifyContent: 'center',
    alignItems: 'center'

  },
  buttonText: {
    backgroundColor: 'blue',
    color: 'white'
  },
  button: {
    backgroundColor: "#3c8dbc",
    paddingVertical: 15
  },
  window: {
    marginBottom: 15
  }
});


AppRegistry.registerComponent("Register", () => Register);
