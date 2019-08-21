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
import LoginView from "./app/views/LoginView";
import HomeScreen from "./app/components/HomeScreen";
import RegisterView from "./app/views/RegisterView";
import SettingsView from "./app/views/SettingsView";
import MyMapView from "./app/views/MyMapView";
import FAQView from "./app/views/FAQView";
import Question from "./app/components/Question";
import DoarScreen from "./app/components/DoarScreen";
import EditView from "./app/views/EditView";
import QuizView from "./app/views/QuizView";
import StatusView from "./app/views/StatusView";

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
    console.log(this.state.logging);

    if(this.state.logging == "false" || !this.state.logging) {
      return (
        <View style={styles.container}>
          <LoginView navigation={this.props.navigation} />
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
  LoginView: {
    screen: LoginView,
    navigationOptions: {
      title: "LoginView"
    }
  },
  MyMapView: {
    screen: MyMapView,
    navigationOptions: {
      title: "MyMapView"
    }
  },
  RegisterView: {
    screen: RegisterView,
    navigationOptions: {
      title: "Registro"
    }
  },
  QuizView: {
    screen: QuizView,
    navigationOptions: {
      title: "QuizView"
    }
  },
  SettingsView: {
    screen: SettingsView,
    navigationOptions: {
      title: "SettingsView"
    }
  },
  EditView: {
    screen: EditView,
    navigationOptions: {
      title: "EditView"
    }
  },
  FAQView: {
    screen: FAQView,
    navigationOptions: {
      title: "FAQView"
    }
  },

  Question: {
    screen: Question,
    navigationOptions: {
      title: "Question"
    }
  },

  DoarScreen: {
    screen: DoarScreen,
    navigationOptions: {
      title: "DoarScreen"
    }
  },

  StatusView: {
    screen: StatusView,
    navigationOptions: {
      title: "StatusView"
    }
  },

});

export default createAppContainer(App);

/*Criando stylesheet*/
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
