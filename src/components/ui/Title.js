import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Title = ({ title, size }) => {
    return (
        <View style={styles.centeredView}>
            <Text style={[styles.title, { fontSize: size }]}>{title}</Text>
        </View>
    )
}

export default Title

const styles = StyleSheet.create({
    centeredView: {
        alignItems: "center",
    },
    title: {
        color: "#c82b2c",
        fontWeight: "500",
    }
})