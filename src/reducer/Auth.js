
import { SET_CAMPAIGN_LIST, LOGIN} from '../actions/Types';

/** initialize the state */
const INITIAL_STATE = {
  isLoggedIn: false,
  userDetails: null,
  tsaList: []
}

function AuthReducer (state = INITIAL_STATE, action) {
    switch (action.type) {
        case LOGIN:
            return { ...state,  userDetails: action.payload,isLoggedIn: true };
        case SET_CAMPAIGN_LIST:
            return { ...state, tsaList: action.payload };
        default:
            return state;
    }
}

export default AuthReducer





