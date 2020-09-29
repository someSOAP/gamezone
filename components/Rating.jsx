import React from 'react';
import { Image } from 'react-native';
const ratingImages = {
    1: require('../assets/rating-1.png'),
    2: require('../assets/rating-2.png'),
    3: require('../assets/rating-3.png'),
    4: require('../assets/rating-4.png'),
    5: require('../assets/rating-5.png'),
}

export default function Rating({ rating = 1 }){
    return (
        <Image source={ratingImages[rating]}/>
    )
}