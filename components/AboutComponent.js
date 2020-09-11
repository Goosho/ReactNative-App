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

      
    }
  })
  
class About extends Component {

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
        
        const renderItem = ({item, index}) => {
            return (
                <ListItem
                key={index}
                title={item.name}
                subtitle={item.description}
                hideChevron={true}
                leftAvatar={{ source: require('./images/alberto.png')}}
              >
              </ListItem>
            );
        };

        return (
            
            <View style={styles.container}>
                <Card>
                   <Text style={styles.sectionHeader}>Our History</Text>
                   <Text >Started in 2010, Ristorante con Fusion quickly established itself as a culinary 
                          icon par excellence in Hong Kong. With its unique brand of world fusion cuisine
                          that can be found nowhere else, it enjoys patronage from the A-list clientele
                          in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world,
                          you never know what will arrive on your plate the next time you visit us.</Text>

                    <Text>The restaurant traces its humble beginnings to The Frying Pan, a successful
                          chain started by our CEO, Mr. Peter Pan, that featured for the first time the 
                          world's best cuisines in a pan.</Text>
                </Card>
           
                <Card >  
                    <Text  style={styles.sectionHeader}>Corparate Leaders</Text>
                    <FlatList 
                         data={this.state.leaders}
                        renderItem={renderItem}
                        />
                </Card>
               
            </View>
    );
    }
}
export default About;