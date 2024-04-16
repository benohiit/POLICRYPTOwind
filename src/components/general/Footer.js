import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Title from '../ui/Title'
const Footer = () => {
    return (
        <View style={styles.footer}>
            <Title title={'POLITICO'} size={10} /><Text style={styles.simpleText}> © Copyrights</Text>
        </View>
    )
}

export default Footer

const styles = StyleSheet.create({
    footer: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center"
    },
    simpleText: {
        fontSize: 10,
        color: "#FFF"
    }
})