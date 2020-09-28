import { createStackNavigator } from 'react-navigation-stack';
import { About } from '../screens'

const screens = {
    About: {
        screen: About,
        navigationOptions: {
            title: "About GameZone",
        },
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