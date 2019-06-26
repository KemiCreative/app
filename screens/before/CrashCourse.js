import React, { Component } from 'react';
import { View, ScrollView, Text } from 'react-native';

import { WebView } from 'react-native-webview';

export default class CrashCourse extends Component {
  static navigationOptions = {
    title: 'A 4 Minute Crash Course'
  };

  render() {
    return (
      <View>
        <Text style={{ fontSize: 25 }}>A 4 Minute Crash Course</Text>
        <Text>
          Watch this video to get prepped and ready for Dare 2 Share LIVE!
        </Text>
        <View>
          <Text>[4 Minute Crash Course Video Goes Here]</Text>
        </View>
      </View>
    );
  }
}
