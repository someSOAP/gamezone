import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import Card from '../components/Card';
import ModalForm from '../components/ModalForm';
import ReviewForm from './ReviewForm'

import globalStyles from '../styles'


export default function Home({ navigation }){

    const [modalOpen, setModalOpen] = useState(false); 
    const [reviews, setReviews] = useState([
        { title: 'Zelda, Breath of freshAir', rating: 5, body: 'lorem ipsum' },
        { title: 'Gotta Cathc them All', rating: 4, body: 'lorem ipsum' },
        { title: 'Not So "Final countdown"', rating: 3, body: 'lorem ipsum' }
    ])

    return (
        <View style={globalStyles.container}>
        
            <ModalForm 
                visible={modalOpen} 
                onClose={()=>setModalOpen(false)}
            >
                <ReviewForm 
                    onSubmit = {(review)=>{
                        review.key = Math.random().toString();
                        setReviews((currentReviews)=>{
                            return [...currentReviews, review];
                        })
                        setModalOpen(false)
                    }}
                />
            </ModalForm>
            <MaterialIcons 
                style={style.modalToggle}
                name = "add"
                size = {24}
                onPress={()=>setModalOpen(true)}
            />
            <FlatList
                keyExtractor = { (item, index) => String(index) }
                data={reviews}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={()=> navigation.navigate("ReviewDetails", item)}>
                        <Card>
                            <Text style={globalStyles.titleText}>{item.title}</Text>
                        </Card>
                    </TouchableOpacity>
                )}
            />

        </View>
    )
}

const style = StyleSheet.create({
    modalToggle: {
        marginBottom: 10,
        borderWidth: 1,
        borderColor: "#f2f2f2",
        padding: 10,
        borderRadius: 10,
        alignSelf: 'center'
    }
})