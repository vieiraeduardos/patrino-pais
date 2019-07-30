import React, { Component } from "react";

import {
  Alert,
  KeyboardAvoidingView,
  TouchableOpacity,
  Image,
  TextInput,
  StyleSheet,
  Text,
  View
} from "react-native";

import AsyncStorage from '@react-native-community/async-storage';

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      "email": "",
      "password": "",
      "logging": "false"
    };
  }

  /*Removendo header padrão*/
  static navigationOptions = {
    header: null
  };

  /*Definindo as credenciais do usuário*/
  async login(responseJson) {
    try {
      if(responseJson.message == "OK") {
        await AsyncStorage.setItem('code', "" + responseJson.code);
        await AsyncStorage.setItem('logging', "true");

        this.props.navigation.navigate("HomeScreen");

      } else {
        Alert.alert("E-mail ou senha estão incorretos!");

      }
    } catch (error) {
      console.debug(error);
    }
  };

  /*Verificando as credenciais do usuário*/
  onLoginPress() {
    const { email, password } = this.state;

    const url = "http://10.16.35.188:3000"

    return fetch(url + '/login', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password
        }),
      })
      .then((response) => response.json())
      .then((responseJson) => {
          if(responseJson.message == "OK") {
            this.login(responseJson);
          } else {
            Alert.alert("E-mail ou senha estão incorretos!");
          }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <View behavior="padding" style={styles.container}>
          <View style={styles.logoContainer}>
            <Image style={styles.logo} source={require("../res/heart.png")} />
            <Text style={styles.subtext}>Patrino</Text>
          </View>
          <KeyboardAvoidingView style={styles.keyboard}>
            <View style={styles.window}>
              <TextInput
                placeholder="E-mail"
                returnKeyType="next"
                onSubmitEditing={() => this.passwordInput.focus()}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={(email) => this.setState({email})}
              />
            </View>
            <View style={styles.window}>
              <TextInput
                placeholder="Senha"
                returnKeyType="go"
                secureTextEntry
                ref={input => (this.passwordInput = input)}
                onChangeText={(password) => this.setState({password})}              />
            </View>
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={this.onLoginPress.bind(this)}
            >
              <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => {
                this.props.navigation.navigate("Register");
              }}
            >
              <Text style={styles.buttonText}>Registrar-se</Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </View>

      </View>
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
    width: 200,
    height: 200
  },
  subtext: {
    color: "black",
    marginTop: 10,
    width: 200,
    textAlign: "center",
    opacity: 0.8,
    fontSize: 50
  },
  keyboard: {
    margin: 20,
    padding: 20,
    alignSelf: "stretch"
  },
  buttonContainer: {
    marginTop: 10,
    backgroundColor: "#3c8dbc",
    paddingVertical: 15
  },
  buttonText: {
    textAlign: "center",
    color: "#FFF",
    fontWeight: "700"
  },
  button: {
    backgroundColor: "#3c8dbc",
    paddingVertical: 15
  },
  window: {
    marginBottom: 15
  }
});
