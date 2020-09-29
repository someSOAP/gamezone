import React from 'react'
import { Image, StyleSheet } from 'react-native';


export default () => <Image source={require('../assets/game_bg.png')} style={style.headerBackground}/>


const style = StyleSheet.create({
    headerBackground: {
        height: "100%",
    }
})