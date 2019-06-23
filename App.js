import React, { Component } from 'react';
import {
  StyleSheet,
  AppRegistry,
  Image,
  ScrollView,
  TouchableHighlight
} from 'react-native';

import CreateAppContainer from './navigation/navigation';
import HomeScreen from './screens/HomeScreen';
//import Styles from './styles/styles';

class LogoTitle extends Component {
  render() {
    let logo = {
      uri:
        'https://app.dare2sharelive.org/apiv3/release/iphone/11/photo/navBar_titleImage@iphone6plus.png?v=1532392652'
    };
    return (
      <TouchableHighlight
        onPress={() => this.props.navigation.navigate('Home')}
      >
        <Image source={logo} style={{ width: 218, height: 54 }} />
      </TouchableHighlight>
    );
  }
}

export default class App extends Component {
  render() {
    return <CreateAppContainer />;
  }
}
AppRegistry.registerComponent('AwesomeProject', () => App);
