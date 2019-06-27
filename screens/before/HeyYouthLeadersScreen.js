import React, { Component } from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';

import { WebView } from 'react-native-webview';

import Styles from '../../constants/Styles';
export default class HeyYouthLeadersScreen extends Component {
  static navigationOptions = {
    title: 'Hey Youth Leaders!'
  };

  render() {
    return (
      <View style={Styles.container}>
        <Text style={Styles.heading}>Hey Youth Leaders!</Text>
        <Text style={Styles.content}>
          Check out this video from Greg Stier to get you and your students
          ready for Dare 2 Share LIVE.
        </Text>
        <View>
          <Text style={Styles.content}>[Video From Greg Stier Goes Here]</Text>
        </View>
      </View>
    );
  }
}
