import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Home } from '../pages/Home';
import { About } from '../pages/About';
import { Features } from '../pages/Features';

export const Routes = () => {
  return (
    <Switch>
      <Route path='/HightlightTabs/about' component={About} />
      <Route path='/HightlightTabs/features' component={Features} />
      <Route path='/HightlightTabs/' exact component={Home} />
    </Switch>
  );
};
