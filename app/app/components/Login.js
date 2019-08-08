import React, { Component } from "react";

import {
  Alert,
  KeyboardAvoidingView,
  TouchableOpacity,
  TouchableNativeFeedback,
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

    const URL = "http://35.202.173.125";

    console.log(this.state);

    return fetch(URL + '/mothers/login/', {
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
      <View behavior="padding" style={styles.container}>
        <KeyboardAvoidingView style={styles.keyboard}>

          <View style={styles.logoContainer}>
            <Image style={styles.logo} source={require("../res/heart.png")} />
            <Text style={styles.subtext}>Patrino</Text>
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="E-mail"
              returnKeyType="next"
              onSubmitEditing={() => this.passwordInput.focus()}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={(email) => this.setState({email})}
            />
            <TextInput
              style={styles.input}
              placeholder="Senha"
              returnKeyType="go"
              secureTextEntry
              ref={input => (this.passwordInput = input)}
              onChangeText={(password) => this.setState({password})}
            />
          </View>

          <View style={styles.buttonContainer}>
            <TouchableNativeFeedback onPress={this.onLoginPress.bind(this)}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Entrar</Text>
              </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback
                onPress={() => {
                this.props.navigation.navigate("Register");
              }}
            >
              <View style={styles.button}>
                <Text style={styles.buttonText}>Registrar-se</Text>
              </View>
            </TouchableNativeFeedback>
          </View>

        </KeyboardAvoidingView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    marginTop: 30,
    marginLeft: 30,
    marginRight: 30,
  },
  logoContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  logo: {
    width: 100,
    height: 100,
  },
  subtext: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    color: "#EF5350",
    opacity: 0.7,
    marginTop: 20,
  },
  keyboard: {
    alignSelf: "stretch"
  },
  buttonContainer: {
  },
  buttonText: {
    textAlign: "center",
    color: "#FFF",
    fontWeight: "700"
  },
  button: {
    marginTop: 10,
    backgroundColor: "#F59896",
    paddingVertical: 15,
    borderRadius: 4,
  },
  window: {
    marginBottom: 15
  },
  inputContainer: {
  },
  input: {
    borderColor: "#707070",
    borderRadius: 4,
    borderWidth: 1,
    borderStyle: "solid",
    marginTop: 10,
  }
});
