import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';

import DuringScreen from '../screens/during/DuringScreen';
import ConversationStarters from '../screens/during/ConversationStarters';
import IJustShared from '../screens/during/IJustShared';
import RockyourcitySocialWall from '../screens/during/RockyourcitySocialWall';
import ConversationsMap from '../screens/during/ConversationsMap';
import Outreach from '../screens/during/Outreach';
import Donate from '../screens/during/Donate';
import Partners from '../screens/during/Partners';

const DuringTabNavigator = createStackNavigator({
  During: DuringScreen,
  ConversationStarters: ConversationStarters,
  IJustShared: IJustShared,
  RockyourcitySocialWall: RockyourcitySocialWall,
  ConversationsMap: ConversationsMap,
  Outreach: Outreach,
  Donate: Donate,
  PartnersOne: Partners
});

export default DuringTabNavigator;
