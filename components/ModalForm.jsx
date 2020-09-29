import React, { useState } from 'react';
import { View, Modal, StyleSheet } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'


const ModalForm = ({ visible, onClose }) => (
    <Modal visible={visible} animationType="slide">
        <View style={style.modalTitle}>
            <MaterialIcons 
                name = "close"
                size = {24}
                onPress={onClose}
            />
        </View>
        <View style={style.modalContent}>

        </View>
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
