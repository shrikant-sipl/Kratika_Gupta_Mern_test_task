import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import App from './App';
import { store, pStore } from './store';
import { PersistGate } from 'redux-persist/lib/integration/react';

//Remove all console.* statements
console.log = () => { };
console.error = () => { };
console.disableYellowBox = true;
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <PersistGate loading={null} persistor={pStore}>
    		  <App />
        </PersistGate>
    </Provider>,
  </React.StrictMode>,
  document.getElementById('root')
);

