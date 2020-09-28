import React from 'react';
import { View, Text, Button } from 'react-native'
import globalStyles from '../styles'


export default function ReviewDetails({ navigation }){

    const title = navigation.getParam("title")
    const body = navigation.getParam("body")
    const rating = navigation.getParam("rating")

    return (
        <View style={globalStyles.container}>
            <Text>{title}</Text>
            <Text>{body}</Text>
            <Text>{rating}</Text>
        </View>
    )
}
