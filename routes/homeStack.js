import React from 'react';
import { Image } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { Home, ReviewDetails } from '../screens'
import Header from '../components/Header'
import HeaderBackground from '../components/HeaderBackground'

const screens = {
    Home: {
        navigationOptions: ({navigation}) => ({
            headerTitle: () => <Header title="GameZone" navigation={navigation}/>,
            headerBackground: HeaderBackground
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