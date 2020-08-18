import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Landing from '../pages/Landing';
import LogIn from '../pages/LogIn';
import SignUp from '../pages/SignUp';


const RootRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/log-in" exact component={LogIn} />
        <Route path="/sign-up" exact component={SignUp} />
        <Redirect path="*" to="/" />
      </Switch>
    </BrowserRouter>
  );
};

export default RootRouter;
