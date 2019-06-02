import React, {Component} from "react";

import {
  View,
  ScrollView,
  FlatList
} from 'react-native';

import {
  Header,
  Avatar,
  Badge,
  Card,
  Icon,
  Text,
  ThemeProvider

} from "react-native-elements";

export default class Question extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
  console.debug(this.props.navigation.state.params.item);
   return (
     <ThemeProvider>
       <Header
         statusBarProps={{ barStyle: 'light-content', backgroundColor: '#3D6DCC' }}
         barStyleP="light-content"
         leftComponent={{ icon: 'arrow-back', color: '#fff' }}
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
