import React, { Component } from 'react';
import {
  TouchableHighlight,
  Text,
  View,
  StyleSheet,
  ImageBackground
} from 'react-native';
import { withNavigation } from 'react-navigation';
class BlockLink extends Component {
  render() {
    return (
      <View>
        <TouchableHighlight
          onPress={() => this.props.navigation.navigate(this.props.href)}
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
export default withNavigation(BlockLink);
