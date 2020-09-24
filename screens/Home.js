import React from 'react';
import { StyleSheet, View, Text } from 'react-native'

export default function Home(){
    return (
        <View style={style.containder}>
            <Text>HOME</Text>
        </View>
    )
}

const style = StyleSheet.create({
    containder: {
        padding: 24,
    }
})