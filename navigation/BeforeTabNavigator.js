import React from 'react';
import { Platform } from 'react-native';
import {
  createStackNavigator,
  createBottomTabNavigator
} from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import BeforeScreen from '../screens/before/BeforeScreen';

const BeforeTabNavigator = createStackNavigator({
  Before: BeforeScreen
});

BeforeTabNavigator.navigationOptions = {
  tabBarLabel: 'Before',
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

export default BeforeTabNavigator;
