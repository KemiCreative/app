import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';

import { WebView } from 'react-native-webview';

export default class PictureStarters extends Component {
  static navigationOptions = {
    title: 'Picture Starters'
  };

  constructor() {
    super();
    this.state = {
      screenHeight: Math.round(Dimensions.get('window').height) - 170
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
            uri: 'https://dare2sharelive.org/app/sharingpictures3.html'
          }}
          style={{
            width: '100%',
            height: this.state.screenHeight
          }}
          startInLoadingState={true}
          renderLoading={() => <Text>Loading...</Text>}
        />
      </View>
    );
  }
}
