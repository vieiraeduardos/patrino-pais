import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar, Alert, Image} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

import { createStackNavigator, createAppContainer } from 'react-navigation';

import Login from "./app/components/Login";
import HomeScreen from "./app/components/HomeScreen";
import QRCodeReader from "./app/components/QRCodeReader";
import Register from "./app/components/Register";
import Settings from "./app/components/Settings";

class Home extends Component<{}> {

  state = {
    logging: "false"
  };

  constructor() {
    super();

  }

  componentDidMount() {
    this.retrieveData()

  }

  static navigationOptions = {
    headerStyle: {
      backgroundColor: "white",
      elevation: null
    },
    header: null
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

    if(this.state.logging == "false") {
      return (
        <View style={styles.container}>
          <StatusBar barStyle="light-content" backgroundColor="white" />
          <Login navigation={this.props.navigation} />
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <StatusBar barStyle="light-content" backgroundColor="white" />
          <HomeScreen navigation={this.props.navigation} />
        </View>
      );
    }
  }
}

const App = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: "Home"
    }
  },
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
        title: "HomeScreen"
      },
  },
  Login: {
    screen: Login,
    navigationOptions: {
      title: "Login"
    }
  },
  QRCodeReader: {
    screen: QRCodeReader,
    navigationOptions: {
      title: "Leitor de QR Code"
    }
  },
  Register: {
    screen: Register,
    navigationOptions: {
      title: "Registro"
    }
  },
  Settings: {
    screen: Settings,
    navigationOptions: {
      title: "Settings"
    }
  },

});

export default createAppContainer(App);

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

});
