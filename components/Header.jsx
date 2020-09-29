import React from 'react';
import { StyleSheet, Text, View, Image, } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'

export default function Header({ title, navigation }) {

const openMenu = () => {
    navigation.openDrawer();
}

    return (
        <View style={style.header} >
            <MaterialIcons
                name    = "menu" 
                size    = {28} 
                style   = {style.icon}
                onPress = {openMenu}
            />
            <View style={style.headerTitle}>
                <Image style={style.headerImage} source={require('../assets/heart_logo.png')}/>
                <Text style={style.headerText}>{title}</Text>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    header: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',  
    }, 
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#333',
        letterSpacing: 1,
    },
    headerTitle: {
        flexDirection: 'row'
    },
    icon: {
        position: 'absolute',
        left: 16,
    },
    headerImage: {
        width: 26,
        height: 26,
        marginHorizontal: 10,
    }
})