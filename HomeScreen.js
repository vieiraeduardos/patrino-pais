
import React, {Component} from 'react';
import {Platform, StyleSheet, View, ScrollView} from 'react-native';

import {
  Avatar,
  Badge,
  Header,
  Tile,
  Text
} from "react-native-elements";

type Props = {};
export default class HomeScreen extends Component<Props> {
  render() {
    return (
      <View>
        <Header
          statusBarProps={{ barStyle: 'light-content', backgroundColor: '#3D6DCC' }}
          barStyleP="light-content"
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'Patrino', style: { color: '#fff' } }}
          rightComponent={<View>
        <Avatar
          rounded
          source={require('./logo.jpg')}
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
          <Tile
            imageSrc={require('./1.jpg')}
            title="Seja uma doadora"
            featured
            caption="Veja como é fácil ser uma doadora"
          />

          <Tile
            imageSrc={require('./2.jpg')}
            title="Onde doar?"
            featured
            caption="Localize o Banco de Leite mais próximo de você"
          />

          <Tile
            imageSrc={require('./3.jpg')}
            title="Alguma dúvida?"
            featured
            caption="Encontre todas as respostas que precisa sobre doação"
          />
        </ScrollView>
      </View>
    );
  }
}
