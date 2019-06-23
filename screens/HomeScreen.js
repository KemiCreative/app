import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  ScrollView,
  TouchableHighlight
} from 'react-native';

import { WebView } from 'react-native-webview';

//import Styles from '../styles/styles';
export default class HomeScreen extends Component {
  // static navigationOptions = {
  //   title: 'Home Screen',
  // };
  render() {
    return (
      <View style={{ backgroundColor: '#0033A0', height: '100%' }}>
        <ScrollView>
          <TouchableHighlight
            onPress={() => this.props.navigation.navigate('Before')}
          >
            <View>
              <Image
                source={{
                  uri:
                    'https://app.dare2sharelive.org/apiv3/release/iphone/11/photo/sections_23334215_elements_152964102944_cellBackgroundImage@tablet.jpg?v=1531461658'
                }}
                style={{
                  width: 1536,
                  height: 250,
                  maxWidth: '100%',
                  resizeMode: 'contain'
                }}
              />
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => this.props.navigation.navigate('During')}
          >
            <View>
              <Image
                source={{
                  uri:
                    'https://app.dare2sharelive.org/apiv3/release/iphone/11/photo/sections_23334215_elements_152964127824_cellBackgroundImage@tablet.jpg?v=1531461677'
                }}
                style={{
                  width: 1536,
                  height: 250,
                  maxWidth: '100%',
                  resizeMode: 'contain'
                }}
              />
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => this.props.navigation.navigate('After')}
          >
            <View>
              <Image
                source={{
                  uri:
                    'https://app.dare2sharelive.org/apiv3/release/iphone/11/photo/sections_23334215_elements_152964169985_cellBackgroundImage@tablet.jpg?v=1531461699'
                }}
                style={{
                  width: 1536,
                  height: 250,
                  maxWidth: '100%',
                  resizeMode: 'contain'
                }}
              />
            </View>
          </TouchableHighlight>
          <View style={{ height: '100%', width: '100%' }}>
            <WebView
              source={{ uri: 'https://github.com/facebook/react-native' }}
              style={{ marginTop: 20, width: '100%', height: 400 }}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}
