import React, { Component } from 'react';
import { ActivityIndicator, View } from 'react-native';
class LoadingIcon extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          flexDirection: 'row',
          justifyContent: 'space-around'
        }}
      >
        <ActivityIndicator size="large" color="#0033A0" />
      </View>
    );
  }
}
export default LoadingIcon;
