import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';

import { WebView } from 'react-native-webview';

export default class ConversationStarters extends Component {
  static navigationOptions = {
    title: 'Conversation Starters'
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
          source={{ uri: 'https://dare2sharelive.org/app/sharingvideos3.html' }}
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
