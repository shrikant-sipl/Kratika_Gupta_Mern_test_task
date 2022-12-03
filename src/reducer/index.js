import { combineReducers } from 'redux';
import { reducer as toastrReducer } from 'react-redux-toastr';
import Auth from './Auth'

const rootReducer = (state, action) => {
   if (action.type === 'logout') {
      localStorage.clear()
      state = undefined;
   }
   return allReducers(state, action);
};

/**Combine all the reducers */
const allReducers = combineReducers({
  toastr: toastrReducer,
  auth: Auth,
});

export default rootReducer;
