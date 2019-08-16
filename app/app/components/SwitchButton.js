import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, TouchableHighlight, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default class SwitchButton extends Component {

  constructor(props) {
    super(props);
    this.state = { value: false };
  }

  render () {
    return (
      <View style={button.container}>

        <LinearGradient
          style={button.border}
          start={{x: 1, y: 0}}
          end={{x: 0, y: 1}}
          colors={['#EF5350', '#F59896']}>
          <TouchableOpacity
            style={this.state.value ? button.empty : button.content}
            onPress={() => this.setState({value: true})}>
            <Text style={this.state.value ? button.textPress : button.text}>Sim</Text>
          </TouchableOpacity>
        </LinearGradient>

        <LinearGradient
          style={button.border}
          start={{x: 1, y: 0}}
          end={{x: 0, y: 1}}
          colors={['#EF5350', '#F59896']}>
          <TouchableOpacity
            style={!this.state.value ? button.empty : button.content}
            onPress={() => this.setState({value: false})}>
            <Text style={!this.state.value ? button.textPress : button.text}>Não</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>

    );
  }
}


const button = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  border: {
    width: 100,
    height: 50,
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
    height: 46,
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
