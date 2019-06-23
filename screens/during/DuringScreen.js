import React, { Component } from 'react';
import { View, ScrollView, Text } from 'react-native';

export default class DetailsScreen extends Component {
  static navigationOptions = {
    title: 'During Live'
  };

  render() {
    return (
      <View>
        <Text>During Live</Text>
      </View>
    );
  }
}
