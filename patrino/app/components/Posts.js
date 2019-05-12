import React from 'react';
import { AppRegistry, Dimensions, StyleSheet, View, FlatList, Image, Alert, TextInput, TouchableOpacity, Linking, ScrollView } from "react-native";
import {Form, Content, Accordion, Thumbnail, Container, Item, Input, Header, Left, Body, Icon, Button, Text, Tabs, Tab, Right, Title, Card, CardItem, Badge } from "native-base";

import Help from "./Help";

export default class Posts extends React.PureComponent {

    render() {
      return (
        <ScrollView>
          <Button block success style={{ margin: 10 }}>
            <Text>Localizar BLH</Text>
          </Button>

          <Button block info style={{ margin: 10 }}>
            <Text>Doar</Text>
          </Button>

          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={require("./heart.png")} />
                <Body>
                  <Text>Patrino</Text>
                  <Text note>Equipe de Comunicação</Text>
                </Body>
              </Left>
            </CardItem>

            <CardItem cardBody>
              <Image source={require("./1.jpg")} style={{height: 200, width: 200, flex: 1}}/>
            </CardItem>

            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active type="MaterialIcons" name="search" />
                  <Text>Visualizar</Text>
                </Button>
              </Left>

              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>


          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={require("./heart.png")} />
                <Body>
                  <Text>Patrino</Text>
                  <Text note>Equipe de Comunicação</Text>
                </Body>
              </Left>
            </CardItem>

            <CardItem cardBody>
              <Image source={require("./2.jpg")} style={{height: 200, width: 200, flex: 1}}/>
            </CardItem>

            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active type="MaterialIcons" name="search" />
                  <Text>Visualizar</Text>
                </Button>
              </Left>

              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>


          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={require("./heart.png")} />
                <Body>
                  <Text>Patrino</Text>
                  <Text note>Equipe de Comunicação</Text>
                </Body>
              </Left>
            </CardItem>

            <CardItem cardBody>
              <Image source={require("./3.jpg")} style={{height: 200, width: 200, flex: 1}}/>
            </CardItem>

            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active type="MaterialIcons" name="search" />
                  <Text>Visualizar</Text>
                </Button>
              </Left>

              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>

        </ScrollView>
      );
    }

}
