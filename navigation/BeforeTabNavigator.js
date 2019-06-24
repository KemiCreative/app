import React from 'react';
import { Platform } from 'react-native';

import {
  createStackNavigator,
  createBottomTabNavigator
} from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import BeforeScreen from '../screens/before/BeforeScreen';
import HeyYouthLeadersScreen from '../screens/before/HeyYouthLeadersScreen';
import PushNotifications from '../screens/before/PushNotifications';

const BeforeTabNavigator = createStackNavigator({
  Before: BeforeScreen,
  Hey: HeyYouthLeadersScreen,
  Push: PushNotifications
});

export default BeforeTabNavigator;
