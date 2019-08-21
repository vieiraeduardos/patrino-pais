import React, { Component } from "react";
import { BackHandler, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import LinearGradient from 'react-native-linear-gradient';

import AsyncStorage from '@react-native-community/async-storage';

import BackHeader from '../components/BackHeader';

export default class SettingsView extends Component {
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
      <View style={{flex: 1}}>
        <BackHeader navigation={this.props.navigation} target={"HomeScreen"}/>
        <View style={styles.container}>
          <TouchableOpacity
            onPress={() => navigation.navigate("EditView", {navigation}) }
            style={{alignSelf: 'stretch'}}>
            <LinearGradient
              style={styles.button}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 1}}
              colors={['#EF5350', '#F59896']}>
              <Text style={styles.buttonText}>Editar perfil</Text>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.sair() }
            style={{alignSelf: 'stretch'}}>
            <LinearGradient
              style={styles.button}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 1}}
              colors={['#EF5350', '#F59896']}>
              <Text style={styles.buttonText}>Sair</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

/*Criando style sheet*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 30,
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
