import React, { Component } from 'react';
import { View, ScrollView, Text } from 'react-native';

import { WebView } from 'react-native-webview';

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
        <View>
          <Text>[Video From Greg Stier Goes Here]</Text>
        </View>
      </View>
    );
  }
}
