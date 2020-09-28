import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import globalStyles from '../styles'


export default function Home({ navigation }){

    const [reviews, setReviews] = useState([
        { title: 'Zelda, Breath of freshAir', rating: 5, body: 'lorem ipsum' },
        { title: 'Gotta Cathc them All', rating: 4, body: 'lorem ipsum' },
        { title: 'Not So "Final countdown"', rating: 3, body: 'lorem ipsum' }
    ])

    return (
        <View style={globalStyles.container}>
            <FlatList
                keyExtractor = { (item, index) => String(index) }
                data={reviews}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={()=> navigation.navigate("ReviewDetails", item)}>
                        <Text style={globalStyles.titleText}>{item.title}</Text>
                    </TouchableOpacity>
                )}
            />

        </View>
    )
}
