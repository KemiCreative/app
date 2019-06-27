import React, { Component } from 'react';
import { View, ScrollView, Text } from 'react-native';

import BlockLink from '../../components/BlockLink';
import Styles from '../../constants/Styles';
class DuringScreen extends Component {
  static navigationOptions = {
    title: 'During Live'
  };

  render() {
    return (
      <View style={Styles.bg}>
        <ScrollView>
          <BlockLink
            title="Conversation Starters"
            href="ConversationStarters"
            uri="https://app.dare2sharelive.org/apiv3/release/iphone/11/photo/sections_23498967_GBNodeListTemplateTypeVisuels_sectionParams_18035843_cellBackgroundImage@iphone6plus.jpg"
          />
          <View>
            <BlockLink
              title="I Just Shared!"
              href="IJustShared"
              uri="https://app.dare2sharelive.org/apiv3/release/iphone/11/photo/sections_23498967_GBNodeListTemplateTypeVisuels_sectionParams_23499076_cellBackgroundImage@iphone6plus.jpg"
            />
            <BlockLink
              title="#RockYourCity Social Wall"
              href="RockyourcitySocialWall"
              uri="https://app.dare2sharelive.org/apiv3/release/iphone/11/photo/sections_23498967_GBNodeListTemplateTypeVisuels_sectionParams_19987075_cellBackgroundImage@iphone6plus.jpg"
            />
            <BlockLink
              title="Conversations Map"
              href="ConversationsMap"
              uri="https://app.dare2sharelive.org/apiv3/release/iphone/11/photo/sections_23498967_GBNodeListTemplateTypeVisuels_sectionParams_18880085_cellBackgroundImage@iphone6plus.jpg"
            />
          </View>
          <View>
            <BlockLink
              title="Outreach"
              href="Outreach"
              uri="https://app.dare2sharelive.org/apiv3/release/iphone/11/photo/sections_23498967_GBNodeListTemplateTypeVisuels_sectionParams_23499070_cellBackgroundImage@iphone6plus.jpg"
            />
            <BlockLink
              title="Donate"
              href="Donate"
              uri="https://app.dare2sharelive.org/apiv3/release/iphone/11/photo/sections_23498967_GBNodeListTemplateTypeVisuels_sectionParams_18038447_cellBackgroundImage@iphone6plus.jpg"
            />
            <BlockLink
              title="Partners"
              href="PartnersOne"
              uri="https://app.dare2sharelive.org/apiv3/release/iphone/11/photo/sections_23498967_GBNodeListTemplateTypeVisuels_sectionParams_23919829_cellBackgroundImage@iphone6plus.jpg"
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default DuringScreen;
