import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class BackHeader extends Component {
  render() {
    return (
      <View style={header.background}>
        <View style={header.container}>
          <Icon
            onPress={() => this.props.navigation.navigate(this.props.target) }
            style={header.icon}
            name="arrow-back"/>
          <Text style={header.text}>Patrino</Text>
        </View>
      </View>
    );
  }
};

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
    marginRight: 15,
  },
});
