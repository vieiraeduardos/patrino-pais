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

import BackHeader from '../components/BackHeader';

export default class StatusView extends Component {
  static navigationOptions = {
    header: null
  };

  render() {

   const navigation = this.props.navigation.state.params.navigation;

   return (
     <ThemeProvider>
       <BackHeader navigation={navigation} target="HomeScreenView" />

       <Card>
         <Text
           style={{marginBottom: 10}}
         >
           Pedido Realizado
         </Text>
       </Card>

       <Card>
         <Text
           style={{marginBottom: 10}}
         >
           Pedido Rejeitado
         </Text>
       </Card>

     </ThemeProvider>

    );
 }
}
