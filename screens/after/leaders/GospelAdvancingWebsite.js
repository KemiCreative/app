import React, { Component } from 'react';
import { View, Dimensions } from 'react-native';

import { WebView } from 'react-native-webview';

export default class GospelAdvancingWebsite extends Component {
  static navigationOptions = {
    title: 'GospelAdvancingWebsite'
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
          source={{
            uri: 'https://gospeladvancing.org/resources/'
          }}
          style={{
            width: '100%',
            height: this.state.screenHeight
          }}
        />
      </View>
    );
  }
}