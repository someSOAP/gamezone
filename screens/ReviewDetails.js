import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native'
import Card from '../components/Card'
import Rating from '../components/Rating'
import globalStyles from '../styles'


export default function ReviewDetails({ navigation }){

    const title = navigation.getParam("title")
    const body = navigation.getParam("body")
    const rating = navigation.getParam("rating")

    return (
        <View style={globalStyles.container}>
            <Card>
                <Text style={globalStyles.titleText}>{title}</Text>
                <Text>{body}</Text>
                <View style={style.rating}>
                    <Text>GameZoneRating: </Text>
                    <Rating rating={rating}/>
                </View>
            </Card>
        </View>
    )
}

const style = StyleSheet.create({
    rating: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 16,
        marginTop: 16,
        borderTopWidth: 1,
        borderTopColor: '#eee'
    }
})