import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  ScrollView,
  TouchableHighlight
} from 'react-native';

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
                source={require('../assets/images/sections_23334215_elements_152964102944_cellBackgroundImage-tablet.jpg')}
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
                source={require('../assets/images/sections_23334215_elements_152964127824_cellBackgroundImage-tablet.jpg')}
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
                source={require('../assets/images/sections_23334215_elements_152964169985_cellBackgroundImage-tablet.jpg')}
                style={{
                  width: 1536,
                  height: 250,
                  maxWidth: '100%',
                  resizeMode: 'contain'
                }}
              />
            </View>
          </TouchableHighlight>
        </ScrollView>
      </View>
    );
  }
}
