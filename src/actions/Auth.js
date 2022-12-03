import axios from 'axios'
import { LOGIN, LOGOUT } from './Types'
import { API } from '../config/ApiUrl'
import { apiErrors } from '../config/HandleAPIErrors';

/**
* @method getLoginAccessCode
* @description get login access code for for get access token
*/
export function getLoginAccessToken(callback) {
    const request = axios.get(`${API.login}`)
    return (dispatch) => {
        request.then((res) => {
            callback(res);
            dispatch({
                type: LOGIN,
                payload: res.data
            })
        }).catch(function (error) {
            console.log('error: ', error.response);
            apiErrors(error)
            callback(error);
        });
    }
}

/**
* @method setLogin
* @description logout 
*/
export function logout() {
    return (dispatch) => {
        dispatch({
            type: LOGOUT,
        })
    }
}

