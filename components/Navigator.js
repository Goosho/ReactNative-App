import React, { Component } from 'react';
import {createDrawerNavigator, DrawerItems,} from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import { View, Platform, Text, ScrollView, Image, StyleSheet,SafeAreaView  } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Icon } from 'react-native-elements';
import Menu from './MenuComponent';
import Dishdetail from './DishdetailComponent';
import Home from './HomeComponent';
import About from './AboutComponent';
import Contact from './ContactComponent';

const MenuNavigator = createStackNavigator({
  Menu: { screen: Menu,
    defaultNavigationOptions: ({navigation})=> ( {
        headerLeft: <Icon name='menu' size={24}
            color='white'
            onPress={()=> navigation.toggleDrawer()}/>
   })
    },
  Dishdetail: { screen: Dishdetail }
},
{
  initialRouteName: 'Menu',
  defaultNavigationOptions: {
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
    defaultNavigationOptions: ({navigation})=> ( {
        headerStyle: {
            backgroundColor: "#800000"
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
         color: "#fff"            
        },
        headerLeft: <Icon name='menu' size={24}
            color='white'
            onPress={()=> navigation.toggleDrawer()}/>
   })
  }
  );



  const AboutNavigator = createStackNavigator({
    About: { screen: About }
   
  },
  {
    defaultNavigationOptions: ({navigation})=> ( {
        headerStyle: {
            backgroundColor: "#800000"
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
         color: "#fff"            
        },
        headerLeft: <Icon name='menu' size={24}
            color='white'
            onPress={()=> navigation.toggleDrawer()}/>
   })
  }
  );





  const ContactNavigator = createStackNavigator({
    Contact: { screen: Contact }
   
  },
  {
    defaultNavigationOptions: ({navigation})=> ( {
        headerStyle: {
            backgroundColor: "#800000"
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
         color: "#fff"            
        },
        headerLeft: <Icon name='menu' size={24}
            color='white'
            onPress={()=> navigation.toggleDrawer()}/>
   })
  }
  );


  const CustomDrawerContentComponent = (props) => (
    <ScrollView>
      <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
        <View style={styles.drawerHeader}>
          <View style={{flex:1}}>
          <Image source={require('./images/logo.png')} style={styles.drawerImage} />
          </View>
          <View style={{flex: 2}}>
            <Text style={styles.drawerHeaderText}>Ristorante Con Fusion</Text>
          </View>
        </View>
        <DrawerItems {...props} />
      </SafeAreaView>
    </ScrollView>
  );




const MainNavigator = createDrawerNavigator({
    Home: {
        screen: HomeNavigator,
        defaultNavigationOptions: {
            title:'Home',
            drawerLabel:'Home',
            drawIcon: ({TintColor}) => (
            <Icon 
                name='home' 
                type='font-awesome' 
                size={24} 
                color={TintColor}/>
            )
        }
    },

    About: {
        screen: AboutNavigator,
        defaultNavigationOptions: {
            title:'About Us',
            drawerLabel:'About Us',
            drawIcon: ({TintColor}) => (
            <Icon 
                name='info-circle' 
                type='font-awesome' 
                size={24} 
                color={TintColor}/>
            )
        }
    },

    Menu: {
        screen: MenuNavigator,
        defaultNavigationOptions: {
            title:'Menu',
            drawerLabel:'Menu',
            drawIcon: ({TintColor}) => (
            <Icon 
                name='list' 
                type='font-awesome' 
                size={24} 
                color={TintColor}/>
            )
        }
    },

    Contact: {
        screen: ContactNavigator,
        defaultNavigationOptions: {
            title:'Contact Us',
            drawerLabel:'Contact Us',
            drawIcon: ({TintColor}) => (
            <Icon 
                name='address-card' 
                type='font-awesome' 
                size={22} 
                color={TintColor}/>
            )
        }
    }
   
},{
    drawBackgroungColor: '#D1C4E9',
    contentComponent: CustomDrawerContentComponent
}
);


const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    drawerHeader: {
      backgroundColor: '#512DA8',
      height: 140,
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
      flexDirection: 'row'
    },
    drawerHeaderText: {
      color: 'white',
      fontSize: 24,
      fontWeight: 'bold'
    },
    drawerImage: {
      margin: 10,
      width: 80,
      height: 60
    }
  });



export default createAppContainer(MainNavigator);


