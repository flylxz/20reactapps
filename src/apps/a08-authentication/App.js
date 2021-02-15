import React from 'react';
import { Route, Switch } from 'react-router-dom';

import SiteHeader from './components/SiteHeader';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import { PrivateRoute } from './components/PrivateRoute';

// import { useAuth0 } from './contexts/auth0-context';

import './Authentication.scss';

export const App = () => {
  // const { getToken } = useAuth0();
  // useEffect(() => {
  //   getUserData();
  // }, []);

  // const getUserData = async () => {
  //   const token = await getToken();
  //   console.log(token);
  // };

  return (
    <div className='authentication-app'>
      <SiteHeader />

      <Switch>
        <PrivateRoute path='/Authentication/dashboard'>
          <Dashboard />
        </PrivateRoute>
        <Route path='/Authentication' exact={true}>
          <Home />
        </Route>
      </Switch>
    </div>
  );
};
