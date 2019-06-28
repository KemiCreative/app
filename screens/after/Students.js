import React, { Component } from 'react';
import { View, ScrollView, Text } from 'react-native';

import BlockLink from '../../components/BlockLink';

export default class Students extends Component {
  static navigationOptions = {
    title: 'Students - Keep It Going'
  };

  render() {
    return (
      <View>
        <ScrollView>
          <BlockLink
            title="A Final Message From Greg"
            href="FinalMessageFromGreg"
            uri={require('../../assets/images/sections_23645494_GBNodeListTemplateTypeVisuels_sectionParams_23645538_cellBackgroundImage-iphone6plus.jpg')}
            //uri="https://app.dare2sharelive.org/apiv3/release/iphone/11/photo/sections_23645494_GBNodeListTemplateTypeVisuels_sectionParams_23645538_cellBackgroundImage@iphone6plus.jpg"
          />
          <View>
            <BlockLink
              title="Get The Dare2Share App"
              href="GetTheDare2ShareApp"
              uri={require('../../assets/images/sections_23645494_GBNodeListTemplateTypeVisuels_sectionParams_23645603_cellBackgroundImage-iphone6plus.jpg')}
              //uri="https://app.dare2sharelive.org/apiv3/release/iphone/11/photo/sections_23645494_GBNodeListTemplateTypeVisuels_sectionParams_23645603_cellBackgroundImage@iphone6plus.jpg"
            />
            <BlockLink
              title="Lead The Cause"
              href="LeadTheCause2"
              uri={require('../../assets/images/sections_23645494_GBNodeListTemplateTypeVisuels_sectionParams_23645606_cellBackgroundImage-iphone6plus.jpg')}
              //uri="https://app.dare2sharelive.org/apiv3/release/iphone/11/photo/sections_23645494_GBNodeListTemplateTypeVisuels_sectionParams_23645606_cellBackgroundImage@iphone6plus.jpg"
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}
