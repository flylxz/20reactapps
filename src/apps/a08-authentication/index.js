import React from 'react';
import { App } from './App';
import { Auth0Provider } from './contexts/auth0-context';

export const Authentication = () => (
  <Auth0Provider>
    <App />
  </Auth0Provider>
);
