import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { Home, ReviewDetails } from '../screens'

import Header from '../components/Header'

const screens = {
    Home: {
        navigationOptions: ({navigation}) => ({
            headerTitle: () => <Header title="GameZone" navigation={navigation}/>,
        }),
        screen: Home
    },
    ReviewDetails: {
        navigationOptions: {
            title: "Review Details"
        },
        screen: ReviewDetails,
    }
}

const HomeStack = createStackNavigator(
    screens, 
    { 
        defaultNavigationOptions: {
            headerStyle: { 
                backgroundColor: 'orange',
            }
        } 
    }
);

export default HomeStack;