import React, { Component } from 'react';
import { View, ScrollView, Text } from 'react-native';

import { WebView } from 'react-native-webview';
import Styles from '../../constants/Styles';
export default class CrashCourse extends Component {
  static navigationOptions = {
    title: 'A 4 Minute Crash Course'
  };

  render() {
    return (
      <View style={Styles.container}>
        <Text style={Styles.heading}>A 4 Minute Crash Course</Text>
        <Text style={Styles.content}>
          Watch this video to get prepped and ready for Dare 2 Share LIVE!
        </Text>
        <View>
          <Text style={Styles.content}>
            [4 Minute Crash Course Video Goes Here]
          </Text>
        </View>
      </View>
    );
  }
}
