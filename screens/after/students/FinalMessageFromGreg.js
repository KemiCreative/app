import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { WebView } from 'react-native-webview';

export default class FinalMessageFromGreg extends Component {
  static navigationOptions = {
    title: 'A Final Message from Greg'
  };

  render() {
    return (
      <View>
        <Text>A Final Message from Greg</Text>
        <View>
          <Text>[Video From Greg Stier Goes Here]</Text>
        </View>
      </View>
    );
  }
}
