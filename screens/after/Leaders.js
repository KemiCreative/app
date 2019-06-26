import React, { Component } from 'react';
import { View, ScrollView, Text } from 'react-native';

import BlockLink from '../../components/BlockLink';

export default class Leaders extends Component {
  static navigationOptions = {
    title: 'Leaders - Keep It Going'
  };

  render() {
    return (
      <View>
        <ScrollView>
          <BlockLink
            title="Training After Live"
            href="TrainingAfterLive"
            uri="https://app.dare2sharelive.org/apiv3/release/iphone/11/photo/sections_23645497_GBNodeListTemplateTypeVisuels_sectionParams_23723508_cellBackgroundImage@iphone6plus.jpg"
          />
          <View>
            <BlockLink
              title="Gospel Advancing Website"
              href="GospelAdvancingWebsite"
              uri="https://app.dare2sharelive.org/apiv3/release/iphone/11/photo/sections_23645497_GBNodeListTemplateTypeVisuels_sectionParams_23724703_cellBackgroundImage@iphone6plus.jpg"
            />
            <BlockLink
              title="Lead The Cause"
              href="LeadTheCause"
              uri="https://app.dare2sharelive.org/apiv3/release/iphone/11/photo/sections_23645497_GBNodeListTemplateTypeVisuels_sectionParams_23724734_cellBackgroundImage@iphone6plus.jpg"
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}
