import React, { Component } from 'react'
import {
  TouchableHighlight,
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Dimensions
} from 'react-native'
import { withNavigation } from 'react-navigation'

const getHeight = () => {
  const initial = Dimensions.get('window').height - 92
  return initial / 3
}

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
              display: 'flex',
              height: getHeight(),
              width: '100%',
              backgroundSize: 'cover',
              justifyContent: 'center'
            }}
          >
            <Text
              style={{
                color: '#fff',
                fontWeight: '700',
                textAlign: 'center',
                fontSize: 39,
                textTransform: 'uppercase'
              }}
            >
              {this.props.title}
            </Text>
          </ImageBackground>
        </TouchableHighlight>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  block: {
    height: 250,
    width: '100%'
  }
})
export default withNavigation(BlockLink)
