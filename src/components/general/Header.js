import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Title from '../ui/Title'

const Header = () => {
    return (
        <View style={styles.header}>
            <Title title={"POLICRYPTO"} size={50} />
        </View>

    )
}

export default Header

const styles = StyleSheet.create({
    header: {
        alignItems: "center"
    },
})