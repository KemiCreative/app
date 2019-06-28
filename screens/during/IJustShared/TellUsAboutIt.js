import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';

import { WebView } from 'react-native-webview';
import LoadingIcon from '../../../components/Loading';
export default class PutMeOnTheMap extends Component {
  static navigationOptions = {
    title: 'Tell Us About It!'
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
            uri:
              'https://connect.dare2share.org/dare-2-share-live-2018-app-story-submissions'
          }}
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
