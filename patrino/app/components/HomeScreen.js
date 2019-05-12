import React, { Component } from "react";
import { AppRegistry, StyleSheet, View, FlatList, Image, Alert, TextInput, TouchableOpacity, Linking, ScrollView } from "react-native";

import {Form, Thumbnail, Container, Item, Input, Header, Left, Body, Icon, Button, Text, Tabs, Tab, Right, Title, Card, CardItem, Badge } from "native-base";

import AsyncStorage from '@react-native-community/async-storage';

import { StackNavigator } from "react-navigation";

import { BarChart, Grid } from 'react-native-svg-charts';

import Question from "./Question";
import BarChartE from "./BarChartExample";
import Helps from "./Helps";

import myTheme from './Theme';

export default class HomeScreen extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: "white",
      elevation: null
    },
    header: null
  };

  constructor(props){
    super(props);
  }

  async sair() {
    await AsyncStorage.setItem("email", "");
    await AsyncStorage.setItem("password", "");
    await AsyncStorage.setItem("logging", "false");

    this.props.navigation.navigate("Login");

  }


  render() {
    return (
      <Container>
        <Header hasTabs>
          <Left>
            <Image style={styles.logo} source={require("./heart.png")} />
          </Left>
          <Body>
            <Title>Patrino</Title>
          </Body>
          <Right>
            <Button
              transparent
              onPress={this.sair.bind(this)}
            >
              <Icon type="MaterialIcons" name="exit-to-app" />
            </Button>
          </Right>
        </Header>

        <Tabs>
          <Tab heading="Início" theme={myTheme}>
            <ScrollView>
              <View>
                <Card>
                  <CardItem header>
                    <Text>Amostras analisadas</Text>
                  </CardItem>
                  <BarChartE />
                </Card>
              </View>

              <View>
                <Card>
                  <CardItem header>
                    <Text>Número de doadoras</Text>
                  </CardItem>
                  <BarChartE />
                </Card>
              </View>

              <View>
                <Card>
                  <CardItem header>
                    <Text>Número de leite coletado</Text>
                  </CardItem>
                  <BarChartE />
                </Card>
              </View>
            </ScrollView>
          </Tab>
          <Tab heading="Pedidos">
            <Helps />
          </Tab>
          <Tab heading="QR Code">
            <View>
              <Button block success
                onPress={() => {
                  this.props.navigation.navigate("QRCodeReader");
                }}
              >
                <Icon type="MaterialCommunityIcons" name="qrcode-scan" />
                <Text>Ler QR Code</Text>
              </Button>

            </View>
          </Tab>
        </Tabs>

      </Container>
    );
  }

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "white"
  },
  logoContainer: {
    alignItems: "center",
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  logo: {
    width: 30,
    height: 30
  },
  subtext: {
    color: "black",
    marginTop: 10,
    width: 160,
    textAlign: "center",
    opacity: 0.8
  },
  keyboard: {
    margin: 20,
    padding: 20,
    alignSelf: "stretch"
  },
  buttonContainer: {
    width: '70%',
    justifyContent: 'center',
    alignItems: 'center'

  },
  buttonText: {
    backgroundColor: 'blue',
    color: 'white'
  },
  button: {
    backgroundColor: "#3c8dbc",
    paddingVertical: 15
  },
  window: {
    marginBottom: 15
  }
});


AppRegistry.registerComponent("HomeScreen", () => HomeScreen);
