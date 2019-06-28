import React, { Component } from 'react';
import { View, ScrollView, Text } from 'react-native';

import BlockLink from '../../components/BlockLink';
import Styles from '../../constants/Styles';
export default class Outreach extends Component {
  static navigationOptions = {
    title: 'Outreach'
  };

  render() {
    return (
      <View style={Styles.bg}>
        <ScrollView>
          <BlockLink
            title="Outreach Script"
            href="OutreachScript"
            //uri="https://app.dare2sharelive.org/apiv3/release/iphone/11/photo/sections_23499070_GBNodeListTemplateTypeVisuels_sectionParams_23501742_cellBackgroundImage@iphone6plus.jpg"
            uri={require('../../assets/images/sections_23499070_GBNodeListTemplateTypeVisuels_sectionParams_23501742_cellBackgroundImage-iphone6plus.jpg')}
          />
          <BlockLink
            title="The G.O.S.P.E.L."
            href="TheGospel"
            //uri="https://app.dare2sharelive.org/apiv3/release/iphone/11/photo/sections_23499070_GBNodeListTemplateTypeVisuels_sectionParams_23744583_cellBackgroundImage@iphone6plus.jpg"
            uri={require('../../assets/images/sections_23499070_GBNodeListTemplateTypeVisuels_sectionParams_23744583_cellBackgroundImage-iphone6plus.jpg')}
          />
        </ScrollView>
      </View>
    );
  }
}
