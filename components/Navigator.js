import React, { Component } from 'react';
import { createSwitchNavigator, createNavigationContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

// Auth screens.
import Menu from './MenuComponent';
import Dishdetail from './DishdetailComponent';

// Create switch navigator.
//const nav= createSwitchNavigator({
 //  Menu: Menu,
  //  Dishdetail: Dishdetail
   
//});

const MenuNavigator = createStackNavigator({
  Menu: { screen: Menu },
  Dishdetail: { screen: Dishdetail }
},
//{
  //initialRouteName: 'Menu',
//  navigationOptions: {
 //     headerStyle: {
  //        backgroundColor: "#512DA8"
   //   },
    //  headerTintColor: '#fff',
   //   headerTitleStyle: {
    //   color: "#fff"            
     // }
 //}
//}
);

export default createAppContainer(MenuNavigator);


