import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import header from './components/header';
import home from './pages/home';
import signUp from './pages/signUp';
import sSignIn from './pages/signIn';

const appRouter = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={home} />
        <Route path="/signup" component={signUp} />
        <Route path="/signin" component={signIn} />
      </Switch>
    </Router>
  );
};

export default appRouter;
