import React, {Component} from 'react';
import {Platform, StyleSheet, View, StatusBar, FlatList} from 'react-native';

import { CardItem, Input, Body, Content, Container } from "native-base";
import { Text, ListItem, Left, Right, Radio } from "native-base";

import Choice from "./Choice";

export default class MultipleChoice extends Component<{}> {

  render() {
    return (
      <Container>
        <Content>
          <FlatList
            data={this.props.question.choices}
            renderItem={ ({item}) => <Choice choice={item} /> }
            keyExtractor={ ({id}, index) => "ID" + index }
          />
        </Content>
      </Container>
    );
  }
}
