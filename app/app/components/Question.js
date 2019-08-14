import React, {Component} from "react";

import {
  View,
  ScrollView,
  FlatList
} from 'react-native';

import {
  
  Avatar,
  Badge,
  Card,
  Icon,
  Text,
  ThemeProvider

} from "react-native-elements";

import Header from './Header';

export default class Question extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
  console.debug(this.props.navigation.state.params.item);
   return (
     <ThemeProvider>
       <Header/>
       <ScrollView>
        <Card title={this.props.navigation.state.params.item.title}>
          <Text style={{marginBottom: 10}}>
            {this.props.navigation.state.params.item.content}
          </Text>
        </Card>
       </ScrollView>

     </ThemeProvider>

    );
 }
}
