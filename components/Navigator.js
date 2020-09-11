import React, { Component } from 'react';
import { createSwitchNavigator, createNavigationContainer } from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Menu from './MenuComponent';
import Dishdetail from './DishdetailComponent';
import Home from './HomeComponent';

const MenuNavigator = createStackNavigator({
  Menu: { screen: Menu },
  Dishdetail: { screen: Dishdetail }
},
{
  initialRouteName: 'Menu',
  navigationOptions: {
      headerStyle: {
          backgroundColor: "#800000"
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
       color: "#fff"            
      }
 }
}
);

const HomeNavigator = createStackNavigator({
    Home: { screen: Home }
   
  },
  {
    navigationOptions: {
        headerStyle: {
            backgroundColor: "#800000"
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
         color: "#fff"            
        }
   }
  }
  );
const MainNavigator = createDrawerNavigator({
    Home: {
        screen: HomeNavigator,
        navigationOptions: {
            title:'Home',
            drawerLabel:'Home'
        }
    },
    Menu: {
        screen: MenuNavigator,
        navigationOptions: {
            title:'Menu',
            drawerLabel:'Menu'
        }
    }
},{
    drawBackgroungColor: '#D1C4E9'
}
)
export default createAppContainer(MainNavigator);


