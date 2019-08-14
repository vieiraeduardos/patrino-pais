import React, {Component} from "react";

import {ScrollView, Text, Switch, Button, Alert, View} from "react-native";

import Header from './Header';

import AsyncStorage from '@react-native-community/async-storage';

export default class Quiz extends Component {
  static navigationOptions = {
    header: null
  };

  async onAnalize() {
    const code = await AsyncStorage.getItem("code");
    const result = this.state;
    const navigation = this.props.navigation.state.params.navigation;

    var isGiver = true;

    for(index in result) {
      console.log(result[index])
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
    return(
      <View>
        <Header/>
      
        <ScrollView>
          <Text>1. Você não está passando por um tratamento?</Text>
          <Text>Sim</Text>
          <Switch
            style={{marginTop:30}}
            onValueChange = {(value) => this.setState({first: value})}
            value = {this.state.first}
          />

        <Text>2. Você não possui nenhuma doença transmitida pelo sangue?</Text>
          <Text>Sim</Text>
          <Switch
            style={{marginTop:30}}
            onValueChange = {(value) => this.setState({second: value})}
            value = {this.state.second}
          />

        <Text>3. Você possui geladeira?</Text>
          <Text>Sim</Text>
          <Switch
            style={{marginTop:30}}
            onValueChange = {(value) => this.setState({third: value})}
            value = {this.state.third}
          />

        <Text>4. Você tem casa de alvenaria?</Text>
          <Text>Sim</Text>
          <Switch
            style={{marginTop:30}}
            onValueChange = {(value) => this.setState({fourth: value})}
            value = {this.state.fourth}
          />

        <Text>5. Você é maior de idade?</Text>
          <Text>Sim</Text>
          <Switch
            style={{marginTop:30}}
            onValueChange = {(value) => this.setState({fifth: value})}
            value = {this.state.fifth}
          />

          <Button
            onPress={() => this.onAnalize()}
            title="Verificar"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />

        </ScrollView>
      </View>
    );
  }
}
