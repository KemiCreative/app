import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  AppRegistry,
  Image,
  ScrollView,
  TouchableHighlight,
  Button
} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation'; // Version can be specified in package.json

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

class HomeScreen extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#0033A0',
      color: '#ffffff'
    },
    headerTitle: <LogoTitle />,
    headerRight: (
      <Button
        onPress={() => alert('This is a button!')}
        title="Info"
        color="#fff"
      />
    )
  };
  render() {
    let before = {
      uri:
        'root/assets/images/sections_23334215_elements_152964102944_cellBackgroundImage@tablet.jpg'
    };
    let during = {
      uri:
        'root/assets/images/sections_23334215_elements_152964127824_cellBackgroundImage@tablet.jpg'
    };
    let after = {
      uri:
        'root/assets/images/sections_23334215_elements_152964169985_cellBackgroundImage@tablet.jpg'
    };
    return (
      <View style={styles.container}>
        <ScrollView>
          <TouchableHighlight
            onPress={() => {
              /* 1. Navigate to the Details route with params */
              this.props.navigation.navigate('Details', {
                itemId: 86,
                otherParam: 'anything you want here'
              });
            }}
          >
            <Image
              source={before}
              style={{
                width: 1536,
                height: 250,
                maxWidth: '100%',
                resizeMode: 'contain'
              }}
            />
          </TouchableHighlight>

          <Image
            source={during}
            style={{
              width: 1536,
              height: 250,
              maxWidth: '100%',
              resizeMode: 'contain'
            }}
          />
          <Image
            source={after}
            style={{
              width: 1536,
              height: 250,
              maxWidth: '100%',
              resizeMode: 'contain'
            }}
          />
        </ScrollView>
      </View>
    );
  }
}
class DetailsScreen extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#0033A0',
      color: '#ffffff'
    },
    headerTitle: <LogoTitle />,
    headerRight: (
      <Button
        onPress={() => alert('This is a button!')}
        title="Info"
        color="#fff"
      />
    )
  };
  render() {
    const { navigation } = this.props;
    const itemId = navigation.getParam('itemId', 'NO-ID');
    const otherParam = navigation.getParam('otherParam', 'DEFAULT TEXT');
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>
        <Button
          title="Go to Details... again"
          onPress={() =>
            this.props.navigation.push('Details', {
              itemId: Math.floor(Math.random() * 100)
            })
          }
        />
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen
  },
  {
    initialRouteName: 'Home'
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

AppRegistry.registerComponent('AwesomeProject', () => App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0033A0'
  }
});
