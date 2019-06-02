import React, {Component} from 'react';
import {Platform, StyleSheet, View, ScrollView} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

import { StackNavigator } from "react-navigation";

import {
  Avatar,
  Badge,
  Header,
  Tile,
  Text
} from "react-native-elements";

export default class HomeScreen extends Component {
  static navigationOptions = {
    header: null
  };

  state = {
    logging: "false"
  };

  constructor() {
    super();

  }

  componentDidMount() {
    this.retrieveData()

  }


  async sair() {
    await AsyncStorage.setItem("email", "");
    await AsyncStorage.setItem("password", "");
    await AsyncStorage.setItem("logging", "false");

    BackHandler.exitApp();
    return true;

  };

  async retrieveData() {
    const value = await AsyncStorage.getItem('logging');
    const email = await AsyncStorage.getItem('email');

    console.debug(value);

    this.setState({
      logging: value
    })
  };

  render() {
    return (
      <View>
        <Header
          statusBarProps={{ barStyle: 'light-content', backgroundColor: '#3D6DCC' }}
          barStyleP="light-content"
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'Patrino', style: { color: '#fff' } }}
          rightComponent={<View>
        <Avatar
          rounded
          source={require('../res/team-3-800x800.jpg')}
        />
        <Badge
          status="success"
          containerStyle={{ position: 'absolute', top: -4, right: -4 }}
        />
      </View>
    }
          containerStyle={{
            backgroundColor: '#3D6DCC',
            justifyContent: 'space-around',
          }}
        />

        <ScrollView>
          <View style={styles.cards}>
            <Tile
              imageSrc={require('../res/suhyeon-choi-251615-unsplash.jpg')}
              title="SEJA UMA DOADORA!"
              featured
              caption="Veja como é fácil ser uma doadora"
            />
          </View>

          <View style={styles.cards}>
            <Tile
              onPress={() => this.props.navigation.navigate("MyMap")}
              imageSrc={require('../res/photo-1501511795728-df53825d742a.jpeg')}
              title="ONDE DOAR?"
              featured
              caption="Localize o Banco de Leite mais próximo"
            />
          </View>

          <View style={styles.cards}>
            <Tile
              onPress={() => this.props.navigation.navigate("Questions")}
              imageSrc={require('../res/photo-1446511437394-36cdff3ae1b3.jpeg')}
              title="TEM ALGUMA DÚVIDA?"
              featured
              caption="Encontre todas as respostas que precisa sobre doação"
            />
          </View>

        </ScrollView>
      </View>
    );

  }

}

/*Criando style sheet*/
const styles = StyleSheet.create({
  cards: {
    marginBottom: 10,
    height: 250
  },
});
