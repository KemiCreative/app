import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';

import { WebView } from 'react-native-webview';
import LoadingIcon from '../../components/Loading';
export default class Donate extends Component {
  static navigationOptions = {
    title: 'Donate'
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
          source={{ uri: 'https://d2s.formstack.com/forms/donation' }}
          style={{
            width: '100%',
            height: this.state.screenHeight
          }}
          startInLoadingState={true}
          renderLoading={() => <LoadingIcon />}
        />
      </View>
    );
  }
}
