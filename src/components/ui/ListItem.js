import { StyleSheet, Text, View, TouchableHighlight } from 'react-native'
import React from 'react'

const ListItem = ({ infos }) => {
    return (
        <TouchableHighlight onPress={() => console.log(infos)} style={styles.item}>
            <Text> {infos.id} {infos.rate} {infos.symbol} {infos.flag} </Text>
        </TouchableHighlight>
    )
}

export default ListItem

const styles = StyleSheet.create({


})