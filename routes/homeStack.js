import { createStackNavigator } from 'react-navigation-stack';
import { Home, ReviewDetails } from '../screens'

const screens = {
    Home: {
        navigationOptions: {
            title: "GameZone",
        },
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