import React from 'react';
import { StyleSheet, View, Text } from 'react-native'


export default function About(){
    return (
        <View style={style.containder}>
            <Text>About</Text>
        </View>
    )
}

const style = StyleSheet.create({
    containder: {
        padding: 24,
    }
})