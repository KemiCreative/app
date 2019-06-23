import React, { Component } from 'react';
import { View, ScrollView, Text } from 'react-native';

import BlockLink from '../../components/BlockLink';

export default class BeforeScreen extends Component {
  static navigationOptions = {
    title: 'Before Live'
  };

  render() {
    return (
      <View>
        <ScrollView>
          <BlockLink
            title="Hey Youth Leaders!"
            href="Hey"
            uri="https://app.dare2sharelive.org/apiv3/release/iphone/11/photo/sections_23502661_GBNodeListTemplateTypeVisuels_sectionParams_23893219_cellBackgroundImage@iphone6plus.jpg"
          />
          <View>
            <BlockLink
              title="Hey Youth Leaders!"
              href="Home"
              uri="https://app.dare2sharelive.org/apiv3/release/iphone/11/photo/sections_23502661_GBNodeListTemplateTypeVisuels_sectionParams_23893219_cellBackgroundImage@iphone6plus.jpg"
            />
            <BlockLink
              title="Hey Youth Leaders!"
              href="Home"
              uri="https://app.dare2sharelive.org/apiv3/release/iphone/11/photo/sections_23502661_GBNodeListTemplateTypeVisuels_sectionParams_23893219_cellBackgroundImage@iphone6plus.jpg"
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}
