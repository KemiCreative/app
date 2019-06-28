import React, { Component } from 'react';
import { View, ScrollView, Text, FlatList } from 'react-native';

import Styles from '../../constants/Styles';
export default class PushNotifications extends Component {
  static navigationOptions = {
    title: 'Enable Push Notifications'
  };

  render() {
    return (
      <ScrollView style={Styles.container}>
        <Text style={Styles.heading}>Enable Push Notifications!</Text>
        <Text style={Styles.content}>
          To get the full Dare 2 Share LIVE event experience, be sure to turn on
          the notifications feature in your app. We’ll be giving away some fun
          freebies leading up to the event to those who have their notifications
          activated!
        </Text>
        <FlatList
          data={[{ key: 'a' }, { key: 'b' }]}
          renderItem={({ item }) => <Text>{item.key}</Text>}
        />
        <Text style={Styles.content}>
          1. Open the Settings on your Android device.
        </Text>
        <Text style={Styles.content}>
          2. Tap "Apps" or "Applications" to view a list of installed
          applications on your phone.
        </Text>
        <Text style={Styles.content}>
          To enable push notifications on Android:
        </Text>
        <Text style={Styles.content}>
          To enable push notifications on Android:
        </Text>
        <Text style={Styles.content}>
          To enable push notifications on Android:
        </Text>
        <Text style={Styles.content}>
          To enable push notifications on Android:
        </Text>
      </ScrollView>
    );
  }
}
