import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { createBrowserHistory } from "history";
import { withRouter } from "react-router-dom";
import Login from '../components/auth/Login';
const history = createBrowserHistory()

export default function ComposedComponent(ComposedComponent, roles) {

    class AuthMiddleware extends Component {

        componentWillMount() {
            console.log('auth',this.props.authenticated)
            if(this.props.authenticated === false) {
                history.push(`/`);
                return false;
            }
        }

        render() {
            if(!_.isEmpty(localStorage.getItem("loginDetails"))) {
                return <ComposedComponent {...this.props} />
            } else {
                return <Login />
            }
        }
    }

    function mapStateToProps() {
        let isAuthenticated;
        console.log('authenticated',(!_.isEmpty(localStorage.getItem("loginDetails"))))
        if(!_.isEmpty(localStorage.getItem("loginDetails"))) {
            isAuthenticated = true;
        } else {
            isAuthenticated = false;
        }
        return {
            authenticated: isAuthenticated,
        }
    }

    return connect(mapStateToProps)(withRouter(AuthMiddleware));
}