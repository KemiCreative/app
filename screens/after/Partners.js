import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';

import { WebView } from 'react-native-webview';

export default class Partners extends Component {
  static navigationOptions = {
    title: 'Partners'
  };

  constructor() {
    super();
    this.state = {
      screenHeight: Math.round(Dimensions.get('window').height) - 112
    };
  }

  render() {
    return (
      <View
        style={{
          width: '100%',
          height: this.state.screenHeight
        }}
      >
        <WebView
          source={{ uri: 'https://dare2sharelive.org/partners/' }}
          style={{
            width: '100%',
            height: this.state.screenHeight
          }}
        />
      </View>
    );
  }
}
