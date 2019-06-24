import React from 'react';
import { Platform } from 'react-native';
import {
  createStackNavigator,
  createBottomTabNavigator
} from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import DuringScreen from '../screens/during/DuringScreen';

const DuringTabNavigator = createStackNavigator({
  During: DuringScreen
});

export default DuringTabNavigator;
