import React from 'react';
import { Platform } from 'react-native';

import { createStackNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import BeforeScreen from '../screens/before/BeforeScreen';
import HeyYouthLeadersScreen from '../screens/before/HeyYouthLeadersScreen';
import PushNotifications from '../screens/before/PushNotifications';
import CrashCourse from '../screens/before/CrashCourse';

const BeforeTabNavigator = createStackNavigator({
  Before: BeforeScreen,
  Hey: HeyYouthLeadersScreen,
  Push: PushNotifications,
  CrashCourse: CrashCourse
});

export default BeforeTabNavigator;
