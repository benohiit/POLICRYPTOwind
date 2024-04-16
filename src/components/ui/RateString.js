import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { formatToEuroString } from '../../utils/functions';
const RateString = ({ curr, amount }) => {
    return (
        <Text style={styles.amount}>{amount && formatToEuroString(amount)} {curr === "eur" ? "€" : (curr === "usd" ? "$" : "£")}</Text>
    )
}

export default RateString

const styles = StyleSheet.create({
    amount: {
        fontSize: 20,
        color: "#FFF",
        fontWeight: "700",
    }
})