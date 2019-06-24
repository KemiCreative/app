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

export default AfterTabNavigator;
