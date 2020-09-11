import React, { Component } from 'react';
import { View, FlatList,Text } from 'react-native';
import { ListItem } from 'react-native-elements';
import { LEADERS } from '../shared/leaders';
import { Card } from 'react-native-elements';
import { SectionList, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
     flex: 1,
     paddingBottom: 0,
     paddingTop: 0
    },
    sectionHeader: {
      paddingTop: 0,
      paddingLeft: 0,
      paddingRight: 0,
      paddingBottom: 0,
      fontSize: 20,
      fontWeight: 'bold',
      alignContent: 'center'
    },
    sectionLine:{
        fontSize: 15,
        paddingTop: 10,
     //   margin:10,
        paddingBottom: 10,
    }
  })
  
class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {
            leaders: LEADERS
        };
    }


    static navigationOptions = {
        title: 'About Us',
    };
    render(){
        return (
            
            <View style={styles.container}>
                <Card>
                   <Text style={styles.sectionHeader}>          Contact Information </Text>
                   
                   <Text style={styles.sectionLine}> 121, Clear Water Bay Road</Text>
                   <Text style={styles.sectionLine}> Clear Water Bay, Kowloon</Text>
                   <Text style={styles.sectionLine}> HONG KONG</Text>
                   <Text style={styles.sectionLine}> Tel: +852 1234 5678</Text>
                   <Text style={styles.sectionLine}> Fax: +852 8765 4321</Text>
                   <Text style={styles.sectionLine}> Email:confusion@food.net</Text>
                    

                 
                </Card>    
            </View>
    );
    }
}
export default Contact;