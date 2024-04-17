import { StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native'
import React, { useState } from 'react'
import { calcInBTC } from '../utils/functions'

const Calculation = ({ currFocused, euroBTC }) => {
    const [amount, setAmount] = useState(null)
    const [result, setResult] = useState(null)
    return (
        <View className={"flex-col justify-center items-center"}>
            <Text className={"text-white"}>Choose the currency above and calculate your invest</Text>

            <View className={"flex-row justify-center m-3"}>
                <Text className={"text-3xl font-medium mx-3 text-white"}>{currFocused?.id}</Text>
                <TextInput
                    style={styles.input}
                    className={"mx-3 items-center w-40 h-10 rounded-md bg-gray-900 text-slate-400"}
                    onChangeText={setAmount}
                    value={amount}
                    placeholder="ex: 2250.5"
                    placeholderTextColor="#444444"
                    keyboardType="numeric"
                />
                <TouchableHighlight className={"mx-3 items-center w-20 h-10 rounded-md bg-slate-200 "} style={styles.button} onPress={() => setResult(calcInBTC(amount, currFocused.rate, euroBTC))}>
                    <Text className={"text-3xl"}>💱</Text>
                </TouchableHighlight>

            </View>
            {result && <Text className={"text-xl font-extrabold text-white"}>{result} <Text className={"text-amber-600"}>₿itcoin</Text> </Text>}
        </View>
    )
}

export default Calculation

const styles = StyleSheet.create({
    button: {       // shadow doesnt work on nativewind
        borderRadius: 5,
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
        shadowColor: '#fff',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.4,
        shadowRadius: 3,
        elevation: 8,
    },
    result: {
        fontSize: 20,
        fontWeight: "800"
    }
})