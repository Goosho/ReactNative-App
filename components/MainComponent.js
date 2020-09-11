import React, { Component } from 'react';
import { View } from 'react-native';
import {  Platform } from 'react-native';
import Navigator from './Navigator';

class Main extends Component {
  constructor(props) {
    super(props);

  }
  render() {
 
    return (
      <View style={{flex:1, paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight }}>
      <Navigator />
  </View>
  
    );
  }
}
  
export default Main;