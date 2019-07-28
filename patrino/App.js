import React, {Component} from 'react';

import {
  StyleSheet,
  View
} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

import {
  createStackNavigator,
  createAppContainer
} from 'react-navigation';

/*Importando componentes de telas*/
import Login from "./app/components/Login";
import HomeScreen from "./app/components/HomeScreen";
import Register from "./app/components/Register";
import Settings from "./app/components/Settings";
import MyMap from "./app/components/MyMap";
<<<<<<< HEAD

import Questions from "./app/components/Questions";
import Question from "./app/components/Question";
=======
>>>>>>> parent of e7f1cfc... Adding questions

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      "logging": false
    };
  }

  componentDidMount() {
    this.setLogging()

  }

  /*Eliminando header padrão*/
  static navigationOptions = {
    header: null
  };

  /*Definindo o valor de logging: true ou false*/
  async setLogging() {
    const value = await AsyncStorage.getItem('logging');

    this.setState({
      logging: value
    })
  };

  render() {
    if(this.state.logging == "false") {
      return (
        <View style={styles.container}>
          <Login navigation={this.props.navigation} />
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
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
  MyMap: {
    screen: MyMap,
    navigationOptions: {
      title: "MyMap"
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
<<<<<<< HEAD

  Questions: {
    screen: Questions,
    navigationOptions: {
      title: "Questions"
    }
  },
  Question: {
    screen: Question,
    navigationOptions: {
      title: "Question"
    }
  },
=======
>>>>>>> parent of e7f1cfc... Adding questions

});

export default createAppContainer(App);

/*Criando stylesheet*/
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
