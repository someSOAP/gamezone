import React from 'react';
import { View, Text } from 'react-native'
import globalStyles from '../styles'


export default function Home(){
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>HOME</Text>
        </View>
    )
}
