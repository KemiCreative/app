import React from 'react';
import { Platform } from 'react-native';
import {
  createStackNavigator,
  createBottomTabNavigator
} from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import AfterScreen from '../screens/after/AfterScreen';

const AfterTabNavigator = createStackNavigator({
  After: AfterScreen
});

AfterTabNavigator.navigationOptions = {
  tabBarLabel: 'After',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  )
};

export default AfterTabNavigator;
