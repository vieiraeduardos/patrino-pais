import React from 'react';
import {ScrollView} from "react-native";
import {Form, Thumbnail, Item, Input, Header, Left, Body, Icon, Button, Text, Tabs, Tab, Right, Title, Card, CardItem, Badge } from "native-base";

import Help from "./Help";

export default class Helps extends React.PureComponent {

    render() {
      return (
        <ScrollView>
          <Help />
          <Help />
          <Help />
          <Help />
        </ScrollView>

      );
    }

}
