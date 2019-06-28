import React, { Component } from 'react';
import { View, ScrollView, Text } from 'react-native';

import BlockLink from '../../components/BlockLink';
import Styles from '../../constants/Styles';
export default class IJustShared extends Component {
  static navigationOptions = {
    title: 'I Just Shared'
  };

  render() {
    return (
      <View style={Styles.bg}>
        <ScrollView>
          <BlockLink
            title="Put Me On The Map!"
            href="OnMap"
            uri={require('../../assets/images/sections_23499076_GBNodeListTemplateTypeVisuels_sectionParams_24794110_cellBackgroundImage-iphone6plus.jpg')}
            //uri="https://app.dare2sharelive.org/apiv3/release/iphone/11/photo/sections_23499076_GBNodeListTemplateTypeVisuels_sectionParams_24794110_cellBackgroundImage@iphone6plus.jpg"
          />
          <BlockLink
            title="Tell Us About It!"
            href="TellUs"
            uri={require('../../assets/images/sections_23499076_GBNodeListTemplateTypeVisuels_sectionParams_23582389_cellBackgroundImage-iphone6plus.jpg')}
            //uri="https://app.dare2sharelive.org/apiv3/release/iphone/11/photo/sections_23499076_GBNodeListTemplateTypeVisuels_sectionParams_23582389_cellBackgroundImage@iphone6plus.jpg"
          />
        </ScrollView>
      </View>
    );
  }
}
