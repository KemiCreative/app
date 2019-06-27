import React, { Component } from 'react';
import {
  StyleSheet,
  AppRegistry,
  Image,
  ScrollView,
  TouchableHighlight
} from 'react-native';

import * as Font from 'expo-font';

import CreateAppContainer from './navigation/navigation';
import HomeScreen from './screens/HomeScreen';
//import Styles from './styles/styles';

class LogoTitle extends Component {
  render() {
    let logo = {
      uri: './assets/images/navBar_titleImage@iphone6plus.png'
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
  state = {
    fontLoaded: false
  };
  render() {
    return <CreateAppContainer />;
  }
  async componentDidMount() {
    await Font.loadAsync({
      'Josefin Sans Thin Italic': require('./assets/fonts/JosefinSans-ThinItalic.ttf'),
      'Josefin Sans Bold': require('./assets/fonts/JosefinSans-Bold.ttf'),
      'Josefin Sans Bold Italic': require('./assets/fonts/JosefinSans-BoldItalic.ttf'),
      'Josefin Sans Italic': require('./assets/fonts/JosefinSans-Italic.ttf'),
      'Josefin Sans Light': require('./assets/fonts/JosefinSans-Light.ttf'),
      'Josefin Sans Light Italic': require('./assets/fonts/JosefinSans-LightItalic.ttf'),
      'Josefin Sans': require('./assets/fonts/JosefinSans-Regular.ttf'),
      'Josefin Sans Semi Bold': require('./assets/fonts/JosefinSans-SemiBold.ttf'),
      'Josefin Sans Semi Bold Italic': require('./assets/fonts/JosefinSans-SemiBoldItalic.ttf'),
      'Josefin Sans Thin': require('./assets/fonts/JosefinSans-Thin.ttf')
    });

    this.setState({ fontLoaded: true });
  }
}
AppRegistry.registerComponent('AwesomeProject', () => App);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0033A0',
    paddingTop: 40,
    paddingBottom: 40,
    paddingLeft: 20,
    paddingRight: 20,
    height: '100%'
  },
  heading: {
    color: '#fff',
    fontFamily: 'Josefin Sans',
    fontWeight: 'normal',
    textAlign: 'left',
    fontSize: 44,
    lineHeight: 60,
    marginBottom: 25,
    textTransform: 'uppercase'
  },
  content: {
    color: '#ffffff',
    fontSize: 28,
    fontFamily: 'Josefin Sans',
    lineHeight: 38,
    marginBottom: 20
  }
});
