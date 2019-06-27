import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';

import { WebView } from 'react-native-webview';
import Styles from '../../../constants/Styles';
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
        style={[
          Styles.container,
          {
            width: '100%',
            height: this.state.screenHeight
          }
        ]}
      >
        <Text>The G.O.S.P.E.L Slider</Text>
      </View>
    );
  }
}
