import React, { useState } from 'react';
import { View, Modal, StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'


const ModalForm = ({ visible, onClose, children }) => (
        <Modal visible={visible} animationType="slide">
            <View style={style.modalTitle}>
                <MaterialIcons 
                    name = "close"
                    size = {24}
                    onPress={onClose}
                />
            </View>
            <TouchableWithoutFeedback onPress = {Keyboard.dismiss}>
                <View style={style.modalContent}>
                    {
                        children
                    }
                </View>
            </TouchableWithoutFeedback>
        </Modal>
)

const style = StyleSheet.create({
    modalTitle: {
        width: "100%",
        flexDirection: "row",
        justifyContent: 'flex-end'
    },
    modalContent: {
        flex: 1,
        width: "90%",
    },
    modalClose: {
        marginVertical: 16,
        padding: 10,
        borderRadius: 10,
    }
})


export default ModalForm;
