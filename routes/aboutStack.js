import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { About } from '../screens'
import Header from '../components/Header'

const screens = {
    About: {
        screen: About,
        navigationOptions: ({navigation}) => ({
            headerTitle: () => <Header title="About" navigation={navigation}/>,
        }),
    }
}

const AboutStack = createStackNavigator(
    screens, 
    { 
        defaultNavigationOptions: {
            headerStyle: { 
                backgroundColor: 'orange',
            }
        } 
    }
);

export default AboutStack;