import React, {Component} from "react";
import {ScrollView, Text, Alert, View} from "react-native";
import { StyleSheet, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import BackHeader from '../components/BackHeader';

import AsyncStorage from '@react-native-community/async-storage';

export default class QuizView extends Component {
  static navigationOptions = {
    header: null
  
  };

  async onAnalize() {
    const code = await AsyncStorage.getItem("code");
    const result = this.state;
    const navigation = this.props.navigation.state.params.navigation;

    var isGiver = true;

    console.log(this.state);

    for(index in result) {
      if(result[index] == false) {
        isGiver = false;
      }
    }

    if(isGiver == false) {
      Alert.alert("Você não pode ser uma doadora!");

      navigation.navigate("HomeScreen");
    } else {
      const URL = "http://35.202.173.125";

      console.log(code)

      return fetch(URL + '/requests/', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            mother: code,
            status: 4
          }),
        })
        .then((response) => response.json())
        .then((responseJson) => {
          Alert.alert("Requisição enviada com sucesso!");

          navigation.navigate("HomeScreen");
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }

  constructor(props) {
    super(props);

    this.state = {
      first: false,
      second: false,
      third: false,
      fourth: false,
      fifth: false
    }
  }

  render() {
    const navigation = this.props.navigation.state.params.navigation;

    return(
      <View>
        <BackHeader navigation={navigation} target={"HomeScreen"}/>

        <ScrollView >
          <View style={{marginLeft: 30, marginRight: 30, marginTop: 20}}>
          <Text>1. Você está passando por algum tratamento de saúde?</Text>
          <View style={button.container}>
              <LinearGradient
                style={button.border}
                start={{x: 1, y: 0}}
                end={{x: 0, y: 1}}
                colors={['#EF5350', '#F59896']}>
                <TouchableOpacity
                  style={this.state.first ? button.empty : button.content}
                  onPress={() => this.setState({first: true})}>
                  <Text style={this.state.first ? button.textPress : button.text}>Sim</Text>
                </TouchableOpacity>
              </LinearGradient>
              <LinearGradient
                style={button.border}
                start={{x: 1, y: 0}}
                end={{x: 0, y: 1}}
                colors={['#EF5350', '#F59896']}>
                <TouchableOpacity
                  style={!this.state.first ? button.empty : button.content}
                  onPress={() => this.setState({first: false})}>
                  <Text style={!this.state.first ? button.textPress : button.text}>Não</Text>
                </TouchableOpacity>
              </LinearGradient>
            </View>

          <Text>2. Você possui alguma doença transmissível pelo sangue?</Text>
          <View style={button.container}>
            <LinearGradient
              style={button.border}
              start={{x: 1, y: 0}}
              end={{x: 0, y: 1}}
              colors={['#EF5350', '#F59896']}>
              <TouchableOpacity
                style={this.state.second ? button.empty : button.content}
                onPress={() => this.setState({second: true})}>
                <Text style={this.state.second ? button.textPress : button.text}>Sim</Text>
              </TouchableOpacity>
            </LinearGradient>
            <LinearGradient
              style={button.border}
              start={{x: 1, y: 0}}
              end={{x: 0, y: 1}}
              colors={['#EF5350', '#F59896']}>
              <TouchableOpacity
                style={!this.state.second ? button.empty : button.content}
                onPress={() => this.setState({second: false})}>
                <Text style={!this.state.second ? button.textPress : button.text}>Não</Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>

          <Text>3. Você possui geladeira?</Text>
          <View style={button.container}>
            <LinearGradient
              style={button.border}
              start={{x: 1, y: 0}}
              end={{x: 0, y: 1}}
              colors={['#EF5350', '#F59896']}>
              <TouchableOpacity
                style={this.state.third ? button.empty : button.content}
                onPress={() => this.setState({third: true})}>
                <Text style={this.state.third ? button.textPress : button.text}>Sim</Text>
              </TouchableOpacity>
            </LinearGradient>
            <LinearGradient
              style={button.border}
              start={{x: 1, y: 0}}
              end={{x: 0, y: 1}}
              colors={['#EF5350', '#F59896']}>
              <TouchableOpacity
                style={!this.state.third ? button.empty : button.content}
                onPress={() => this.setState({third: false})}>
                <Text style={!this.state.third ? button.textPress : button.text}>Não</Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>

          <Text>4. Você tem casa de alvenaria?</Text>
          <View style={button.container}>
              <LinearGradient
                style={button.border}
                start={{x: 1, y: 0}}
                end={{x: 0, y: 1}}
                colors={['#EF5350', '#F59896']}>
                <TouchableOpacity
                  style={this.state.fourth ? button.empty : button.content}
                  onPress={() => this.setState({fourth: true})}>
                  <Text style={this.state.fourth ? button.textPress : button.text}>Sim</Text>
                </TouchableOpacity>
              </LinearGradient>
              <LinearGradient
                style={button.border}
                start={{x: 1, y: 0}}
                end={{x: 0, y: 1}}
                colors={['#EF5350', '#F59896']}>
                <TouchableOpacity
                  style={!this.state.fourth ? button.empty : button.content}
                  onPress={() => this.setState({fourth: false})}>
                  <Text style={!this.state.fourth ? button.textPress : button.text}>Não</Text>
                </TouchableOpacity>
              </LinearGradient>
            </View>

          <Text>5. Você é maior de idade?</Text>
          <View style={button.container}>
            <LinearGradient
              style={button.border}
              start={{x: 1, y: 0}}
              end={{x: 0, y: 1}}
              colors={['#EF5350', '#F59896']}>
              <TouchableOpacity
                style={this.state.fifth ? button.empty : button.content}
                onPress={() => this.setState({fifth: true})}>
                <Text style={this.state.fifth ? button.textPress : button.text}>Sim</Text>
              </TouchableOpacity>
            </LinearGradient>
            <LinearGradient
              style={button.border}
              start={{x: 1, y: 0}}
              end={{x: 0, y: 1}}
              colors={['#EF5350', '#F59896']}>
              <TouchableOpacity
                style={!this.state.fifth ? button.empty : button.content}
                onPress={() => this.setState({fifth: false})}>
                <Text style={!this.state.fifth ? button.textPress : button.text}>Não</Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>

          <TouchableOpacity
            onPress={() => this.onAnalize()}
            style={{alignSelf: 'stretch'}}>
            <LinearGradient
              style={styles.button}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 1}}
              colors={['#EF5350', '#F59896']}>
              <Text style={styles.buttonText}>Enviar</Text>
            </LinearGradient>
          </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  button: {
    height: 46,
    backgroundColor: '#DF4723',
    borderRadius: 4,
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

    marginTop: 10,
    marginBottom: 100,
  },

  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});



const button = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

    marginTop: 10,
    marginBottom: 10,
  },

  border: {
    width: 100,
    height: 35,
    borderRadius: 6,

    justifyContent: 'center',
    alignItems: 'center',

    margin: 10,

    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.16,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },

  content: {
    width: 96,
    height: 31,
    borderRadius: 4,
    backgroundColor: '#FFF',

    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    textAlign: 'center',
    color: '#F59896',
  },

  textPress: {
    textAlign: 'center',
    color: '#FFF',
  },

  empty: {
    width: 96,
    height: 46,
    borderRadius: 4,
    backgroundColor: '#FFFFFF00',

    justifyContent: 'center',
    alignItems: 'center',
  },
});
