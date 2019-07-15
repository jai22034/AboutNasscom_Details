

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';


export default class App extends Component{
  render() {
    return (
  <View style={{flex:1}}>
    <View style={{flex:1,marginLeft:3,marginRight:3}}>
      <Text style={{fontSize:13}}>NASSCOM, a not-for-profit indusrty association, is the apes body for the 154 billion dollar IT BPM industry in India, an industry that has made a phenomenal contribution to India's GDP, exports, employement, infrastructure and global visibility. </Text>
    </View>
    <View style={{flex:.2,marginLeft:3,marginRight:3}}>

    </View>
    <View style={{flex:1,marginLeft:3,marginRight:3}}>
  <Text style={{fontSize:13}}>Established in 1988, NASSCOM's relentles pursuit has been to constantly support the IT BMP indusrty in India, in the latter's continued journey towards sekking trust and respect from varied stakeholders, even as it reorients itself time and again to remain innovative, without ever losing its humane and friendly touch.</Text>
    </View>
    <View style={{flex:.2,marginLeft:3,marginRight:3}}>

</View>
<View style={{flex:7.6,marginLeft:3,marginRight:3}}>
<Text style={{fontSize:12.5}}>NASSCOM is focused on building the architecture integral to the development of the IT BPM sector through policy advocacy, and help in setting up the strategic direction for the sector to unleash its potential and dorminate newer frontiers.</Text>
</View>
  </View>
    );
  }
}

const styles = StyleSheet.create({
 
});
