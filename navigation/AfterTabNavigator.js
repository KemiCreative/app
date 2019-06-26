import React from 'react';
import { Platform } from 'react-native';

import { createStackNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';

// Tier 1 Level
import AfterScreen from '../screens/after/AfterScreen';
import Students from '../screens/after/Students';
import Leaders from '../screens/after/Leaders';
import Survey from '../screens/after/Survey';
import Partners from '../screens/after/Partners';

// Tier 2 Level
import TrainingAfterLive from '../screens/after/leaders/TrainingAfterLive';
import GospelAdvancingWebsite from '../screens/after/leaders/GospelAdvancingWebsite';
import LeadTheCause from '../screens/after/leaders/LeadTheCause';

import FinalMessageFromGreg from '../screens/after/students/FinalMessageFromGreg';
import GetTheDare2ShareApp from '../screens/after/students/GetTheDare2ShareApp';
import LeadTheCause2 from '../screens/after/students/LeadTheCause';

const AfterTabNavigator = createStackNavigator({
  After: AfterScreen,
  Students: Students,
  Leaders: Leaders,
  Survey: Survey,
  PartnersTwo: Partners,

  TrainingAfterLive: TrainingAfterLive,
  GospelAdvancingWebsite: GospelAdvancingWebsite,
  LeadTheCause: LeadTheCause,

  FinalMessageFromGreg: FinalMessageFromGreg,
  GetTheDare2ShareApp: GetTheDare2ShareApp,
  LeadTheCause2: LeadTheCause2
});

export default AfterTabNavigator;
