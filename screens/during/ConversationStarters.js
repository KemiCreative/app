import React, { Component } from 'react';
import { View, ScrollView, Text } from 'react-native';

import BlockLink from '../../components/BlockLink';
import Styles from '../../constants/Styles';
export default class ConversationsStarters extends Component {
  static navigationOptions = {
    title: 'Conversations Starters'
  };

  render() {
    return (
      <View style={Styles.bg}>
        <ScrollView>
          <BlockLink
            title="Video Starters"
            href="VideoStarters"
            uri={require('../../assets/images/sections_18035843_GBNodeListTemplateTypeVisuels_sectionParams_20462181_cellBackgroundImage-iphone6plus.jpg')}
            //uri="https://app.dare2sharelive.org/apiv3/release/iphone/11/photo/sections_18035843_GBNodeListTemplateTypeVisuels_sectionParams_20462181_cellBackgroundImage@iphone6plus.jpg"
          />
          <BlockLink
            title="Picture Starters"
            href="PictureStarters"
            uri={require('../../assets/images/sections_18035843_GBNodeListTemplateTypeVisuels_sectionParams_20462182_cellBackgroundImage-iphone6plus.jpg')}
            //uri="https://app.dare2sharelive.org/apiv3/release/iphone/11/photo/sections_18035843_GBNodeListTemplateTypeVisuels_sectionParams_20462182_cellBackgroundImage@iphone6plus.jpg"
          />
        </ScrollView>
      </View>
    );
  }
}
