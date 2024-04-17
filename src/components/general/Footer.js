import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Title from '../ui/Title'
const Footer = () => {
    return (
        <View className={"absolute bottom-0 left-0 right-0 flex-row justify-center items-center"}>
            <Title title={'POLITICO'} size={10} /><Text className={"text-xs text-white"}> © Copyrights</Text>
        </View>
    )
}

export default Footer

