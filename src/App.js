import React, { Fragment } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux'
import { BrowserRouter } from "react-router-dom";
import ReduxToastr from "react-redux-toastr";
import CustomeRoutes from "./router/Routes";
import Header from './components/common/header/Header';
import "react-redux-toastr/lib/css/react-redux-toastr.min.css";
import "react-datepicker/dist/react-datepicker.css";
import './App.scss';

const App = () => {

  const auth = useSelector((state) => state.auth);
  console.log('auth', auth)

  if(auth.isLoggedIn){
  	axios.defaults.headers.common["Authorization"] = `Bearer ${auth.userDetails.auth_token}`;
  }
  

  return (
    <Fragment>
      <BrowserRouter>
        <Header />
        <CustomeRoutes auth={auth}/>
        <ReduxToastr
          timeOut={50000}
          newestOnTop={false}
          preventDuplicates
          position="top-right"
          transitionIn="fadeIn"
          transitionOut="fadeOut"
          progressBar
        />
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
