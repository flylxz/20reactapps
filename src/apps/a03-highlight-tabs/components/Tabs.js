import React from 'react';
import { NavLink } from 'react-router-dom';

import { Tab } from './Tab';

export const Tabs = () => {
  return (
    <div className='tabs'>
      <Tab>
        <NavLink to='/HightlightTabs/' exact activeClassName='is-active'>
          Home
        </NavLink>
      </Tab>
      <Tab>
        <NavLink to='/HightlightTabs/about' activeClassName='is-active'>
          About
        </NavLink>
      </Tab>
      <Tab>
        <NavLink to='/HightlightTabs/features' activeClassName='is-active'>
          Features
        </NavLink>
      </Tab>
    </div>
  );
};
