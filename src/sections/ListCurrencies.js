import { StyleSheet, Text, View, FlatList, TouchableHighlight, Image } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { parseObjectToArray, formatToDecimals, calculRateToRender } from '../utils/functions'
import { FormattedNumber, IntlProvider } from 'react-intl';
import { LogBox } from 'react-native';
const ListCurrencies = (props) => {
    const DATA = parseObjectToArray(props.allCurr)
    const currencyFocused = useRef({    // useref to not be reloaded every actualisation of the components, but should I declare it at the parent component? what's the best practice ?
        id: null,
        rate: null
    })
    useEffect(() => {
        LogBox.ignoreLogs(['[@formatjs/intl Error FORMAT_ERROR] Error formatting number.']);   //see comment below (line 37)
    }, [])

    const renderItem = ({ item }) => {
        return (
            <TouchableHighlight onPress={() => {
                currencyFocused.current.id = item.id;
                currencyFocused.current.rate = item.rate;
                props.handleCurrencyFocus(currencyFocused.current.id, currencyFocused.current.rate);
            }} >
                <View style={[styles.item, currencyFocused.current.id == item.id && { backgroundColor: "rgba(255, 163, 163, 0.5)" }]}>
                    <View style={styles.flagBox}>
                        <Image style={styles.flag}
                            source={{
                                uri: item.flag,
                            }}
                        />
                    </View>
                    <Text style={[styles.simpleText, styles.curr]}>{item.id}</Text>
                    <Text style={[styles.simpleText, styles.currName]}>{item.currency_name}</Text>
                    {/*<Text style={styles.price}>{calculRateToRender(item.id, item.rate, formatToDecimals(props.euroBTC))}</Text>
                    just sometimes makes the fatal error: 
                    -> RangeError: TaskQueue: Error with task : com.facebook.hermes.intl.JSRangeErrorException: Malformed currency code !
                    
                    But with the FormattedNumber from react-intl under, it does the same but handle the error as a log that I ignore, then its working fine, I know it's not the best process against log errors :p
                    I need to dive deeper to see what would be the best to show the currency properly without any error logs
                    */}
                    <Text style={[styles.simpleText, styles.price]}>
                        <IntlProvider locale='fr'>
                            <FormattedNumber
                                value={item.rate * formatToDecimals(props.euroBTC)}
                                style="currency"
                                currency={item.id}
                                maximumFractionDigits={2}
                            />
                        </IntlProvider>
                    </Text>
                </View>
            </TouchableHighlight>
        );
    };

    return (
        <View style={styles.section}>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

export default ListCurrencies

const styles = StyleSheet.create({
    section: {
        maxHeight: 300,
        backgroundColor: "rgba(255,255,255,0.2)",
        alignSelf: "center",
        marginRight: 10,
        marginLeft: 10,
    },
    item: {
        flexDirection: "row",
        justifyContent: 'flex-start',
        margin: 2
    },
    curr: {
        fontSize: 15,
        fontWeight: "500",
        width: "10%",
        alignItems: "center"
    },
    currName: {
        fontSize: 12,
        width: "40%",
        alignItems: "center"
    },
    price: {
        width: "40%",
        alignItems: "center",
        fontWeight: "500",
    },
    flagBox: {
        width: "10%",
        alignItems: "center"
    },
    flag: {
        height: 20,
        width: 30,
        resizeMode: "stretch",
    },
    simpleText: {
        color: "#FFF"
    }

})