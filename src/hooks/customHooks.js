import React, { useEffect, useState } from 'react';
import axios from 'axios';
const header = { 'Content-Type': 'application/json; charset=UTF-8' }
import moment from 'moment';
export const useGetBTC = () => {
    const [isLoadingBTC, setLoadingBTC] = useState(false);
    const [errorBTC, setErrorBTC] = useState(null);
    const [timeStamp, setTimeStamp] = useState(null);
    const [EUR, setEUR] = useState(null);
    const [USD, setUSD] = useState(null);
    const [GBP, setGBP] = useState(null);
    const bitcoinURL = 'https://api.coindesk.com/v1/bpi/currentprice.json';

    const getBitcoin = () => {
        setErrorBTC(null)
        setLoadingBTC(true)

        axios.get(bitcoinURL, {
            headers: header
        })
            .then((response) => {
                let date = moment(response.data.time.updatedISO)
                date = date.utc().add(2, 'hours').format('D MMMM HH:mm:ss')
                setTimeStamp(date);
                setEUR(response.data.bpi.EUR.rate)
                setUSD(response.data.bpi.USD.rate)
                setGBP(response.data.bpi.GBP.rate)
            })
            .catch((error) => {
                console.log("API ERROR : " + error.message);
            })
            .finally(() => {
                setLoadingBTC(false);
            });
    }

    return [getBitcoin, timeStamp, EUR, USD, GBP, isLoadingBTC, errorBTC];
}
export const useGetCurr = () => {
    const [isLoadingCurr, setLoadingCurr] = useState(false);
    const [errorCurr, setErrorCurr] = useState(null);
    const [responseCurr, setResponseCurr] = useState(null);
    const currencyURL = 'https://api.getgeoapi.com/v2/currency/convert?api_key=a6d2b23eb2ae0f35e5b6aa0bff7541be101bccb6&from=EUR&amount=10&format=json';
    // we could have use the param amount= to have the "rate_for_amount" field without calculating after But we dont want to flood the requests
    const getAllCurrFromEuro = () => {
        setErrorCurr(null)
        setLoadingCurr(true)
        /* The api doesn't accept axios, always gives "ERR_NETWORK"
        axios.get(currencyURL, {
            headers: header
        })
            .then((response) => {
                console.log("response: ", response.data.rates);
                setResponseCurr(response.data.rates)
            })
            .catch((error) => {
                console.log("API ERROR : ", JSON.stringify(error, null, 4));
            })
            .finally(() => {
                setLoadingCurr(false);
            }); */

        fetch(currencyURL)
            .then(response => response.json())
            .then(data => { setResponseCurr(data) })
            .catch(error => console.log(error.message))
            .finally(() => {
                setLoadingCurr(false);
            });
    }

    return [getAllCurrFromEuro, isLoadingCurr, errorCurr, responseCurr];
}

