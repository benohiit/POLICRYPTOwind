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
                <View className={`flex-row justify-center m-1/2 ${currencyFocused.current.id == item.id && 'bg-bg-red/2'}`}>
                    <View className={"w-1/12 items-center"}>
                        <Image
                            className={"w-8 h-5"}
                            source={{
                                uri: item.flag,
                            }}
                        />
                    </View>
                    <Text className={"text-base font-medium w-1/10 items-center text-white mx-1"}>{item.id}</Text>
                    <Text className={"text-xs items-center w-5/12 text-white"}>{item.currency_name}</Text>
                    {/*<Text style={styles.price}>{calculRateToRender(item.id, item.rate, formatToDecimals(props.euroBTC))}</Text>
                    just sometimes makes the fatal error: 
                    -> RangeError: TaskQueue: Error with task : com.facebook.hermes.intl.JSRangeErrorException: Malformed currency code !
                    
                    But with the FormattedNumber from react-intl under, it does the same but handle the error as a log that I ignore, then its working fine, I know it's not the best process against log errors :p
                    I need to dive deeper to see what would be the best to show the currency properly without any error logs
                    */}
                    <Text className={"text-white font-medium items-start w-5/12"}>
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
        <View className={"self-center max-h-72 bg-bg-black/5"}>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

export default ListCurrencies
