import React, {Component} from 'react';
import { BackHandler, Image, StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import AsyncStorage from '@react-native-community/async-storage';

import { StackNavigator } from "react-navigation";

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
    const navigation = this.props.navigation;

    return (
      <View>
        <View style={header.background}>
          <View style={header.container}>
            <Text style={header.text}>Patrino</Text>
            <Icon
              style={header.icon}
              name="perm-identity"
              onPress={() => this.props.navigation.navigate("Settings", {navigation})}/>
          </View>
        </View>

        <View style={{marginBottom: 10}}></View>

        <View style={button.container}>
          <TouchableNativeFeedback onPress={() => this.props.navigation.navigate("Quiz", {navigation})}>
            <View style={button.icon}>
              <Image style={button.img} source={require("../res/milk-bottle.png")} />
            </View>
          </TouchableNativeFeedback>
          <View style={button.textContainer}>
            <Text style={button.title}>Seja uma Doadora</Text>
            <Text style={button.text}>Veja como é fácil ser uma doadora!</Text>
          </View>
        </View>
        <View style={button.container}>
          <TouchableNativeFeedback onPress={() => this.props.navigation.navigate("MyMap")}>
            <View style={button.icon}>
              <Image style={{width: 41, height: 55, }} source={require("../res/location.png")} />
            </View>
          </TouchableNativeFeedback>
          <View style={button.textContainer}>
            <Text style={button.title}>Saiba onde Doar</Text>
            <Text style={button.text}>Localize o banco de leite mais próximo!</Text>
          </View>
        </View>
        <View style={button.container}>
          <TouchableNativeFeedback onPress={() => this.props.navigation.navigate("Questions", {navigation})}>
            <View style={button.icon}>
              <Image style={button.img} source={require("../res/question.png")} />
            </View>
          </TouchableNativeFeedback>
          <View style={button.textContainer}>
            <Text style={button.title}>Tire suas duvidas</Text>
            <Text style={button.text}>Encontre todas as respostas que precisa sobre doação!</Text>
          </View>
        </View>
      </View>
    );
  }
}

const header = StyleSheet.create({
  background: {
    backgroundColor: "#FFF",
    width: "100%",
    height: 54,
    borderBottomColor: 'rgba(0, 0, 0, 0.12)',
    borderBottomWidth: 1,
  },
  container : {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  	alignItems: 'center',
    marginLeft: 37,
    marginRight: 37,
  },
  text: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  	alignItems: 'flex-start',
    fontSize: 20,
  	color: "#F59896",
    fontWeight: '600',
  },
  icon: {
    color: "#F59896",
    fontSize: 25,
  },
});

const button = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginLeft: 37,
    marginRight: 37,
    marginTop: 10,
    marginBottom: 10,
  },
  icon: {
    width: 100,
    height: 100,
    backgroundColor: "#F59896",
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 60,
    height: 60,
  },
  textContainer: {
    flex: 1,
    flexDirection: "column",
    marginLeft: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "normal",
  },
  text: {
    color: "#707070",
  },
});
