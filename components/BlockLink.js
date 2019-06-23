import React, { Component } from 'react';
import {
  TouchableHighlight,
  Text,
  View,
  StyleSheet,
  ImageBackground
} from 'react-native';

export default class BlockLink extends Component {
  render() {
    return (
      <View>
        <TouchableHighlight
          onPress={() =>
            this.props.navigation.navigate({
              routeName: this.props.href
            })
          }
        >
          <ImageBackground
            source={{
              uri: this.props.uri
            }}
            style={{
              height: 250,
              width: '100%',
              backgroundSize: 'cover'
            }}
          >
            <Text>{this.props.title}</Text>
            <Text>{this.props.href}</Text>
          </ImageBackground>
        </TouchableHighlight>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  block: {
    height: 250,
    width: '100%'
  }
});
