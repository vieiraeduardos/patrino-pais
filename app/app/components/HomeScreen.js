import React, {Component} from 'react';
import { BackHandler, Image, StyleSheet, Text, TouchableNativeFeedback, TouchableOpacity, TouchableHighlight, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';

import AsyncStorage from '@react-native-community/async-storage';

import milkBottle from '../res/milk_bottle.png';
import heartPin from '../res/heart_pin.png';
import bubbleChat from '../res/bubble_chat.png';

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
          <TouchableOpacity onPress={() => this.props.navigation.navigate("Quiz", {navigation})}>
            <LinearGradient 
            style={button.icon} 
            start={{x: 0, y: 1}} 
            end={{x: 1, y: 0}} 
            colors={['#EF5350', '#F59896']}>
              <Image style={button.img} source={milkBottle} />
            </LinearGradient>
          </TouchableOpacity>
          <View style={button.textContainer}>
            <Text style={button.title}>Seja uma Doadora</Text>
            <Text style={button.text}>Veja como é fácil ser uma doadora!</Text>
          </View>
        </View>

        <View style={button.container}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("MyMap")}>
            <LinearGradient 
            style={button.icon} 
            start={{x: 0, y: 1}} 
            end={{x: 1, y: 0}} 
            colors={['#EF5350', '#F59896']}>
              <Image style={button.img}source={heartPin} />
            </LinearGradient>
          </TouchableOpacity>
          <View style={button.textContainer}>
            <Text style={button.title}>Saiba onde Doar</Text>
            <Text style={button.text}>Localize o banco de leite mais próximo!</Text>
          </View>
        </View>

        <View style={button.container}>
          <TouchableHighlight onPress={() => this.props.navigation.navigate("Questions", {navigation})}>
            <LinearGradient 
            style={button.icon} 
            start={{x: 0, y: 1}} 
            end={{x: 1, y: 0}} 
            colors={['#EF5350', '#F59896']}>
              <Image style={button.img} source={bubbleChat} />
            </LinearGradient>
          </TouchableHighlight>
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
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.16,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  img: {
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

var styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});