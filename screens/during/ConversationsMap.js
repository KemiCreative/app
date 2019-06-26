import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class ConversationsMap extends Component {
  static navigationOptions = {
    title: 'Conversations Map'
  };

  render() {
    return (
      <View>
        <Text style={{ fontSize: 25 }}>ConversationsMap</Text>
      </View>
    );
  }
}
