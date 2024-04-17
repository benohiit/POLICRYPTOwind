import { Text, View } from 'react-native'
import React from 'react'

const Title = ({ title, size }) => {
    return (
        <View className={"self-start"}>
            <Text className={`text-red-600 text-${size} font-medium -ml-10`}>{title}</Text>
        </View>
    )
}

export default Title

/* const styles = StyleSheet.create({
    centeredView: {
        alignItems: "center",
    },
    title: {
        color: "#c82b2c",
        fontWeight: "500",
    } 
})*/