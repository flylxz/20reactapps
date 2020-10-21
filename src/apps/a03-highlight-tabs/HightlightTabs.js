import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Routes } from './components/Routes';
import { Tabs } from './components/Tabs';

import './HightlightTabs.scss';

export const HightlightTabs = () => {
  return (
    <BrowserRouter>
      <div className='highlight-tab-app'>
        <div className='browser'>
          <Tabs />

          <div className='viewport'>
            <Routes />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};
