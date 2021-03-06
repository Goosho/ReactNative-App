import React, { Component } from 'react';
import { View, FlatList,Text } from 'react-native';
import { ListItem } from 'react-native-elements';
import { DISHES } from '../shared/dishes';


class Menu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES
        };
    }


  
    render(){
        
        const renderMenuItem = ({item, index}) => {

            return (
                <ListItem
                key={index}
                title={item.name}
                subtitle={item.description}
                hideChevron={true}
                onPress={() => navigate('Dishdetail', { dishId: item.id })}
                leftAvatar={{ source: require('./images/uthappizza.png')}}
              />
            );
        };

        const { navigate } = this.props.navigation;
        return (
           // <View>
                <FlatList 
                    data={this.state.dishes}
                    renderItem={renderMenuItem}
                    keyExtractor={item => item.id.toString()}
                    />
          //  </View>
    );
    }

    
}


export default Menu;