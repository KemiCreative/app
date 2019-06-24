import React, { Component } from 'react';
import { View, ScrollView, Text } from 'react-native';

import { WebView } from 'react-native-webview';

export default class PushNotifications extends Component {
  static navigationOptions = {
    title: 'Enable Push Notifications'
  };

  render() {
    return (
      <View>
        <Text style={{ fontSize: 25 }}>Enable Push Notifications!</Text>
        <Text>
          To get the full Dare 2 Share LIVE event experience, be sure to turn on
          the notifications feature in your app. We’ll be giving away some fun
          freebies leading up to the event to those who have their notifications
          activated!
        </Text>
        <Text>To enable push notifications on Android:</Text>
      </View>
    );
  }
}
