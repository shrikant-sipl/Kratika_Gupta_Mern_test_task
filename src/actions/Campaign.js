import axios from 'axios'
import { API } from '../config/ApiUrl'
import { apiErrors } from '../config/HandleAPIErrors';

/**
* @method getCompaignList
* @description get campaignList
*/
export function getCompaignList(callback) {
    const request = axios.get(`${API.getCampaignList}`)
    return (dispatch) => {
        request.then((res) => {
            callback(res);
        }).catch(function (error) {
            console.log('error: ', error.response);
            callback(error);
        });
    }
}

/**
* @method getCryptoCurrencyList
* @description getCryptoCurrencyList
*/
export function getCryptoCurrencyList(callback) {
    const request = axios.get(`${API.getCurrencyList}`)
    return (dispatch) => {
        request.then((res) => {
            callback(res);
        }).catch(function (error) {
            console.log('error: ', error.response);
            apiErrors(error)
            callback(error);
        });
    }
}

/**
* @method getCryptoRateList
* @description get crypto rate list
*/
export function getCryptoRateList(currency, callback) {
    const request = axios.get(`${API.cryptoRateList}?currency=${currency}`)
    return (dispatch) => {
        request.then((res) => {
            callback(res);
        }).catch(function (error) {
            console.log('error: ', error.response);
            apiErrors(error)
            callback(error);
        });
    }
}

/**
* @method addDonationAmount
* @description add donation amount
*/
export function addDonationAmount(data,callback) {
    const request = axios.post(`${API.addDonation}`, data)
    return (dispatch) => {
        request.then((res) => {
            callback(res);
        }).catch(function (error) {
            console.log('error: ', error.response);
            apiErrors(error)
            callback(error);
        });
    }
}





