import React from 'react';
import { Platform } from 'react-native';
import {
  createStackNavigator,
  createBottomTabNavigator
} from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import DuringScreen from '../screens/during/DuringScreen';

const DuringTabNavigator = createStackNavigator({ During: DuringScreen });

DuringTabNavigator.navigationOptions = {
  tabBarLabel: 'During',
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

export default DuringTabNavigator;
