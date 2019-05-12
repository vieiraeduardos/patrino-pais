import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar} from 'react-native';

import { CardItem, Input, Body, Card } from "native-base";

import QuestionBody from "./QuestionBody";


export default class Question extends Component<{}> {

  render() {
    return (
      <View>
        <Card>
          <CardItem header>
            <Text>{this.props.question.title}</Text>
          </CardItem>
          <CardItem>
            <Body>
              <Text>
                {this.props.question.description}
              </Text>
            </Body>
          </CardItem>

          <QuestionBody question={this.props.question} />
       </Card>
      </View>
    );
  }
}
