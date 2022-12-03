import React, { Suspense } from "react";
import { Route, Switch } from "react-router";
import { Spinner } from 'react-bootstrap'
import AuthMiddleware from './AuthMiddleware'
import Login from '../components/auth/Login';
import Projects from '../components/campaign';
import Error from '../components/common/Error/PageNotFound';
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

const Routes = (props) => {

  const isLoggedIn = props.auth.isLoggedIn
  return (
    <Suspense fallback={
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    }>
      <Switch>
        {!isLoggedIn && <Route exact path="/" component={Login} history={history}/>}
        {!isLoggedIn && <Route exact path="/login" component={Login} history={history}/>}
        <Route exact path="/" component={AuthMiddleware(Projects)} history={history}/>
        <Route component={Error} />
      </Switch>
    </Suspense>
  );
}

export default Routes;
