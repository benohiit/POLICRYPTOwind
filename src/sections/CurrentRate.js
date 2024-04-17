import { StyleSheet, Text, View, Image, ActivityIndicator } from 'react-native'
import React from 'react'
import RateString from '../components/ui/RateString'
import Title from '../components/ui/Title'

const CurrentRate = (props) => {
    return (
        <>
            <View className={"flex-row justify-center h-52"}/* style={styles.section} */>
                <View className={"w-1/2"}>
                    <Image
                        className={"absolute right-10 h-60 w-60"}
                        source={require('../assets/img/bitcoin.png')}
                    />
                </View>
                <View className={"w-1/2"}>
                    <Title title={"POLICRYPTO"} size={"4xl"} />
                    <View className={"mt-7"}>
                        {
                            props.isLoading ? <ActivityIndicator size={"large"} /> :
                                <>
                                    <RateString curr={"eur"} amount={props.rates.eur} />
                                    <RateString curr={"usd"} amount={props.rates.usd} />
                                    <RateString curr={"gbp"} amount={props.rates.gbp} />
                                </>
                        }
                    </View>
                </View>
            </View>
            <View className={"self-end mr-5 mb-5"}>
                <Text className={"text-white justify-end"}> last update: {props.rates.timeStamp}</Text>
            </View>
        </>
    )
}

export default CurrentRate