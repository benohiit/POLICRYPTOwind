import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Divider = () => {
    return (
        <View style={styles.line}>
        </View>
    )
}

export default Divider

const styles = StyleSheet.create({
    line: {
        width: "90%",
        margin: 10,
        borderBottomWidth: 2,
        borderBottomColor: "#515151",
        alignSelf: "center"
    }
})