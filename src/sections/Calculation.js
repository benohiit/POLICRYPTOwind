import { StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native'
import React, { useState } from 'react'
import { calcInBTC } from '../utils/functions'

const Calculation = ({ currFocused, euroBTC }) => {
    const [amount, setAmount] = useState(null)
    const [result, setResult] = useState(null)
    return (
        <View style={styles.section}>
            <Text style={[styles.simpleText, styles.simpleText]}>Choose the currency above and calculate your invest</Text>

            <View style={styles.line}>
                <Text style={[styles.simpleText, styles.curr]}>{currFocused?.id}</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setAmount}
                    value={amount}
                    placeholder="ex: 2250.5"
                    placeholderTextColor="#444444"
                    keyboardType="numeric"
                />
                <TouchableHighlight style={styles.button} onPress={() => setResult(calcInBTC(amount, currFocused.rate, euroBTC))}>
                    <Text style={styles.textBtn}>💱</Text>
                </TouchableHighlight>

            </View>
            {result && <Text style={[styles.simpleText, styles.result]}>{result} <Text style={{ color: "#ae9173" }}>₿itcoin</Text> </Text>}
        </View>
    )
}

export default Calculation

const styles = StyleSheet.create({
    section: {
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: "center"
    },
    line: {
        flexDirection: "row",
        justifyContent: 'center',
        margin: 10
    },
    button: {
        marginHorizontal: 10,
        alignItems: 'center',
        width: 75,
        height: 40,
        borderRadius: 5,

        backgroundColor: '#BBBBBBBB',

        backgroundColor: '#000000',
        shadowColor: '#fff',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.4,
        shadowRadius: 3,
        elevation: 8,
    },
    textBtn: {
        fontSize: 30
    },
    input: {
        borderRadius: 5,
        height: 40,
        width: 150,
        paddingHorizontal: 5,
        color: "#aaa",
        backgroundColor: '#222222',
        shadowColor: '#fff',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.4,
        shadowRadius: 3,
        elevation: 8,
    },
    simpleText: {
        color: "#FFF"
    },
    curr: {
        fontSize: 30,
        marginHorizontal: 10,
        fontWeight: "500",
    },
    result: {
        fontSize: 20,
        fontWeight: "800"
    }
})