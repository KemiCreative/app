import React, { Component } from 'react';
import { View, ScrollView, Text } from 'react-native';

import BlockLink from '../../components/BlockLink';

export default class ConversationsStarters extends Component {
  static navigationOptions = {
    title: 'Conversations Starters'
  };

  render() {
    return (
      <View>
        <ScrollView>
          <BlockLink
            title="Video Starters"
            href="Hey"
            uri="https://app.dare2sharelive.org/apiv3/release/iphone/11/photo/sections_18035843_GBNodeListTemplateTypeVisuels_sectionParams_20462181_cellBackgroundImage@iphone6plus.jpg"
          />
          <BlockLink
            title="Picture Starters"
            href="Hey"
            uri="https://app.dare2sharelive.org/apiv3/release/iphone/11/photo/sections_18035843_GBNodeListTemplateTypeVisuels_sectionParams_20462182_cellBackgroundImage@iphone6plus.jpg"
          />
        </ScrollView>
      </View>
    );
  }
}
