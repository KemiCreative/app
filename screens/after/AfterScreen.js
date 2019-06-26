import React, { Component } from 'react';
import { View, ScrollView, Text } from 'react-native';

import BlockLink from '../../components/BlockLink';

export default class AfterScreen extends Component {
  static navigationOptions = {
    title: 'After Live'
  };

  render() {
    return (
      <View>
        <ScrollView>
          <BlockLink
            title="Students - Keep It Going"
            href="Students"
            uri="https://app.dare2sharelive.org/apiv3/release/iphone/11/photo/sections_18038460_GBNodeListTemplateTypeVisuels_sectionParams_23645494_cellBackgroundImage@iphone6plus.jpg"
          />
          <View>
            <BlockLink
              title="Leaders - Keep It Going"
              href="Leaders"
              uri="https://app.dare2sharelive.org/apiv3/release/iphone/11/photo/sections_18038460_GBNodeListTemplateTypeVisuels_sectionParams_23645497_cellBackgroundImage@iphone6plus.jpg"
            />
            <BlockLink
              title="Survey - Make It Better"
              href="Survey"
              uri="https://app.dare2sharelive.org/apiv3/release/iphone/11/photo/sections_18038460_GBNodeListTemplateTypeVisuels_sectionParams_20513314_cellBackgroundImage@iphone6plus.jpg"
            />
            <BlockLink
              title="Partners"
              href="PartnersTwo"
              uri="https://app.dare2sharelive.org/apiv3/release/iphone/11/photo/sections_18038460_GBNodeListTemplateTypeVisuels_sectionParams_24320269_cellBackgroundImage@iphone6plus.jpg"
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}
