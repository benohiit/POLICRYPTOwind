import { StyleSheet, Text, View, Image, ActivityIndicator } from 'react-native'
import React from 'react'
import RateString from '../components/ui/RateString'

const CurrentRate = (props) => {
    return (
        <>
            <View style={styles.section}>
                <View style={styles.asideLeft}>
                    <Image
                        style={styles.logoBitcoin}
                        source={require('../assets/img/bitcoin.png')}
                    />
                </View>
                <View style={styles.asideRight}>
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
            <View style={styles.bottomLine}>
                <Text style={styles.simpleText}> last update: {props.rates.timeStamp}</Text>
            </View>
        </>
    )
}

export default CurrentRate

const styles = StyleSheet.create({
    section: {
        flexDirection: "row",
        justifyContent: 'center',
    },
    asideRight: {
        width: '60%',
        alignSelf: "center",
        flexDirection: "column",
        justifyContent: 'center',
        color: "#FFF"
    },
    asideLeft: {
        width: '40%',
    },
    logoBitcoin: {
        alignSelf: "center",
        height: 100,
        width: 100,
        resizeMode: "stretch",
    },
    bottomLine: {
        alignSelf: "center",
    },
    simpleText: {
        color: "#FFF"
    }
})