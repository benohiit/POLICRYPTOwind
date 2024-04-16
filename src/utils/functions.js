
export const formatToEuroString = (amount) => {
    return amount.replace(/[,]/g, ' ').replace(/[.]/g, ',')
}
export const formatToDecimals = (amount) => {
    let formatedAmount = amount.replace(/[,]/g, '').replace(/[.]/g, '.')
    return parseFloat(formatedAmount)
}

export const calculRateToRender = (currency, rate, price) => {
    const shortCurrency = currency.toLocaleLowerCase().slice(0, 2)
    const priceToRender = new Intl.NumberFormat(shortCurrency, { style: 'currency', currency: currency }).format(
        price * rate,
    )
    return priceToRender
}

export const parseObjectToArray = (obj) => {        // good for Flatlist but not for virtualizedlist
    const result = [];
    for (const [key, value] of Object.entries(obj.rates)) {
        const d = {
            id: key,
            currency_name: value.currency_name,
            rate: value.rate,
            flag: "https://flagpedia.net/data/flags/normal/" + key.toLocaleLowerCase().slice(0, 2) + ".png"
        };
        result.push(d);
    }
    result.sort((a, b) => a.id > b.id ? 1 : -1);
    return result
}

export const calcInBTC = (amount, rate, euroBTC) => {
    let result = parseFloat(amount) / parseFloat(rate)
    result = result / formatToDecimals(euroBTC)
    return result
}

