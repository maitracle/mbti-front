import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Landing from '../pages/Landing';


const RootRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Redirect path="*" to="/" />
      </Switch>
    </BrowserRouter>
  );
};

export default RootRouter;
