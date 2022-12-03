import { toastr } from 'react-redux-toastr';
import { logout } from '../actions';
import { MESSAGES } from '../config/Constant'

/**
 * @method apiErrors
 * @description handle api error 
 */
export const apiErrors = (res,dispatch) => {
    console.log('@@@@res', res)
    const response = res ? res.response : undefined;
    // Adding un authorize condition after disscussion with kk
    if (response.data && response.status === 401) {
        //dispatch(logout())
        toastr.error('Error', MESSAGES.SESSION_EXPIRE);
        setTimeout(window.location.assign('/'), 5000);
    }else if (response && response.data && response.data.error) {
        toastr.error('Error', response.data.error.message);
    } else if (response && response.data && response.data.message) {
        toastr.error('Error', response.data.message);
    } else if (response && response.data && response.status === 422) {
        toastr.error('Error', response.data && response.data.message ? response.data.message : MESSAGES.SERVER_ERROR);
    } else {
        console.log('case8')
        toastr.error('Error', MESSAGES.SERVER_ERROR);
    }
}