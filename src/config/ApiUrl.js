const BASE_URL = 'http://10.10.9.24:3000'

//Api end points
export const API = {
    login: `${BASE_URL}/auh-token-generator`,
    getCampaignList:`${BASE_URL}/get-active-campaign`,
    addDonation: `${BASE_URL}/donate-amount`,
    getCurrencyList: `${BASE_URL}/get-all-crypto-currency`,
    cryptoRateList: 'https://api.coinbase.com/v2/exchange-rates'
}