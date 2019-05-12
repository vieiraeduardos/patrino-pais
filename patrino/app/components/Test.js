import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, Button, View, FlatList, Alert, TextInput, TouchableOpacity, Linking, ScrollView } from "react-native";

import {Header, Left, Body, Icon, Right, Title, Card, CardItem, Badge } from "native-base";

import { StackNavigator } from "react-navigation";

import Question from "./Question";

export default class Test extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: "#D95D39",
      elevation: null
    },
    header: null
  };

  constructor(props){
    super(props);
    this.state ={ dataSource: []}
  }

  componentDidMount(){
    return fetch('https://gist.githubusercontent.com/vieiraeduardos/3be38803c48bb92ca3cd88ff5c85131e/raw/e0d418aa314b1e7e32016f2431b09f98f0db9cdf/test.json')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          dataSource: responseJson.questions,
        }, function(){

        });

      })
      .catch((error) =>{
        this.setState({
          dataSource: JSON.stringify(error),
        }, function(){

        });
      });
  }

  render() {
    return (
      <ScrollView>
        <Header>
          <Body>
            <Title>Quiz</Title>
          </Body>
        </Header>

        <FlatList
          data={this.state.dataSource}
          renderItem={ ({item}) => <Question question={item} /> }
          keyExtractor={ ({id}, index) => "ID" + index }
        />

      </ScrollView>
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


AppRegistry.registerComponent("HomeScreen", () => HomeScreen);
