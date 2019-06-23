import React, { Component } from 'react';
import { View, ScrollView, Text } from 'react-native';

export default class HeyYouthLeadersScreen extends Component {
  static navigationOptions = {
    title: 'Hey Youth Leaders!'
  };

  render() {
    return (
      <View>
        <Text>Hey Youth Leaders!</Text>
        <Text>
          Check out this video from Greg Stier to get you and your students
          ready for Dare 2 Share LIVE.
        </Text>
        <View style={{ height: '100%', width: '100%' }}>
          <WebView
            source={{ uri: 'https://github.com/facebook/react-native' }}
            style={{ marginTop: 20, width: '100%', height: 400 }}
          />
        </View>
      </View>
    );
  }
}
