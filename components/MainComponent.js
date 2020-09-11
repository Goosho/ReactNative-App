import React, { Component } from 'react';
import Menu from './MenuComponent';
import Dishdetail from './DishdetailComponent';
import { View } from 'react-native';
import { DISHES } from '../shared/dishes';
import {  Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import Navigator from './Navigator';

//const Navigator = createAppContainer(MenuNavigator);


//const MenuNavigator = createStackNavigator({
 // Menu: { screen: Menu },
 // Dishdetail: { screen: Dishdetail }/
//},
//{
 // initialRouteName: 'Menu',
 // navigationOptions: {
  //    headerStyle: {
   //       backgroundColor: "#512DA8"
    //  },
     // headerTintColor: '#fff',
      //headerTitleStyle: {
       //   color: "#fff"            
//      }
 // }
//}
//);

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {

      dishes: DISHES
    };
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