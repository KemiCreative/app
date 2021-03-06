import React, { Component } from 'react';

import { createAppContainer, createBottomTabNavigator } from 'react-navigation'; // Version can be specified in package.json
import { Platform } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import TabBarIcon from '../components/TabBarIcon';
import BeforeTabNavigator from './BeforeTabNavigator';
import DuringTabNavigator from './DuringTabNavigator';
import AfterTabNavigator from './AfterTabNavigator';

HomeScreen.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-home` : 'md-home'}
    />
  )
};

BeforeTabNavigator.navigationOptions = {
  tabBarLabel: 'Before',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-help-circle` : 'md-questioncircle'}
    />
  )
};

DuringTabNavigator.navigationOptions = {
  tabBarLabel: 'During',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-map` : 'md-map'}
      // name={
      //   Platform.OS === 'ios'
      //     ? `ios-information-circle${focused ? '' : '-outline'}`
      //     : 'md-information-circle'
      // }
    />
  )
};

AfterTabNavigator.navigationOptions = {
  tabBarLabel: 'After',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-megaphone` : 'md-megaphone'}
    />
  )
};

const AppNavigator = createBottomTabNavigator(
  {
    Home: HomeScreen,
    Before: BeforeTabNavigator,
    During: DuringTabNavigator,
    After: AfterTabNavigator
  },
  // {
  //   Home: HomeScreen,
  //   Details: DetailsScreen
  // },
  {
    initialRouteName: 'Home'
  }
);

export default createAppContainer(AppNavigator);
