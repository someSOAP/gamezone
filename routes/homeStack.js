import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
// import { About, Home, ReviewDetails } from '../screens'
import Home from '../screens/Home'
import ReviewDetails from '../screens/ReviewDetails'
const screens = {
    Home: {
        screen: Home,
    },
    ReviewDetails: {
        screen: ReviewDetails,
    },
    // About: {
    //     screen: About,
    // }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);