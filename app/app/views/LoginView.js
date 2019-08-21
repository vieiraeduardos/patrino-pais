import React, { Component } from "react";
import { Alert, Image, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import LinearGradient from 'react-native-linear-gradient';

import AsyncStorage from '@react-native-community/async-storage';

import heart from '../res/heart.png';

export default class LoginView extends Component {
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
    const navigation = this.props.navigation;

    return (

        <KeyboardAvoidingView 
          behavior="padding"
          enabled={Platform.OS == 'ios'}
          style={styles.container}>

          <View style={styles.box}>
            <Image source={heart}/>
            <Text style={styles.title}>Patrino</Text>
          </View>

          <View style={styles.box}>
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              returnKeyType="next"
              keyboardType="email-address"
              placeholder="Digite seu e-mail"
              placeholderTextColor="#999"
              style={styles.input}
              onSubmitEditing={() => this.passwordInput.focus()}
              onChangeText={(email) => this.setState({email})}
            />
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              returnKeyType="go"
              secureTextEntry
              placeholder="Digite sua senha"
              placeholderTextColor="#999"
              style={styles.input}
              ref={input => (this.passwordInput = input)}
              onChangeText={(password) => this.setState({password})}
            />
          </View>

          <View style={styles.box}>
            <TouchableOpacity 
              onPress={this.onLoginPress.bind(this)}
              style={{alignSelf: 'stretch'}}>
              <LinearGradient 
                style={styles.button}
                start={{x: 0, y: 0}} 
                end={{x: 1, y: 1}} 
                colors={['#EF5350', '#F59896']}>
                <Text style={styles.buttonText}>Entrar</Text>
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity 
              onPress={() => this.props.navigation.navigate("RegisterView", {navigation})} 
              style={{alignSelf: 'stretch'}}>
              <LinearGradient 
                style={styles.button}
                start={{x: 0, y: 0}} 
                end={{x: 1, y: 1}} 
                colors={['#EF5350', '#F59896']}>
                <Text style={styles.buttonText}>Registrar-se</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>

          

        </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 30,
  },

  box: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'stretch',
    alignItems: 'center',
  },

  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#EF5350',
    marginTop: 10,
  },

  input: {
    height: 46,
    alignSelf: 'stretch',
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 4,
    marginTop: 10,
    paddingHorizontal: 15,
  },

  button: {    
    height: 46,
    backgroundColor: '#DF4723',
    borderRadius: 4,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.16,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },

  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});