import React, { Component } from 'react';
import { View, ScrollView, Text } from 'react-native';

import BlockLink from '../../components/BlockLink';
import Styles from '../../constants/Styles';
export default class BeforeScreen extends Component {
  static navigationOptions = {
    title: 'Before Live'
  };

  render() {
    return (
      <View style={Styles.bg}>
        <ScrollView>
          <BlockLink
            title="Hey Youth Leaders!"
            href="Hey"
            uri={require('../../assets/images/sections_23502661_GBNodeListTemplateTypeVisuels_sectionParams_23893219_cellBackgroundImage-iphone6plus.jpg')}
            //uri="https://app.dare2sharelive.org/apiv3/release/iphone/11/photo/sections_23502661_GBNodeListTemplateTypeVisuels_sectionParams_23893219_cellBackgroundImage@iphone6plus.jpg"
          />
          <View>
            <BlockLink
              title="Enable Push Notifications!"
              href="Push"
              uri={require('../../assets/images/sections_23502661_GBNodeListTemplateTypeVisuels_sectionParams_24825659_cellBackgroundImage-iphone6plus.jpg')}
              //uri="https://app.dare2sharelive.org/apiv3/release/iphone/11/photo/sections_23502661_GBNodeListTemplateTypeVisuels_sectionParams_24825659_cellBackgroundImage@iphone6plus.jpg?"
            />
            <BlockLink
              title="A 4 Minute Crash Course"
              href="CrashCourse"
              uri={require('../../assets/images/sections_23502661_GBNodeListTemplateTypeVisuels_sectionParams_23576160_cellBackgroundImage-iphone6plus.jpg')}
              //uri="https://app.dare2sharelive.org/apiv3/release/iphone/11/photo/sections_23502661_GBNodeListTemplateTypeVisuels_sectionParams_23576160_cellBackgroundImage@iphone6plus.jpg"
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}
