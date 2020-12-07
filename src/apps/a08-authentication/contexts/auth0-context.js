import React, { createContext, useEffect, useState, useContext } from 'react';
import createAuth0Client from '@auth0/auth0-spa-js';

export const Auth0Context = createContext();

export const useAuth0 = () => useContext(Auth0Context);

export const Auth0Provider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [auth0Client, setAuth0Client] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initAuth0 = async () => {
      const auth0 = await createAuth0Client({
        domain: 'dev-2kcwtpjk.eu.auth0.com',
        client_id: 'GDkO3ZooEOr7LAlByAbbCIPpHlD9jfH2',
        // redirect_uri: window.location.origin,
        redirect_uri: window.location.href,
      });
      console.log(auth0);
      setAuth0Client(auth0);

      //   handle redirect when user comes back
      if (
        window.location.search.includes('code=') &&
        window.location.search.includes('state=')
      ) {
        try {
          await auth0.handleRedirectCallback();
        } catch (err) {
          alert(err);
        }

        // window.location.replace(window.location.pathname);
        window.location.replace(window.location.href);
      }

      //   is user authenticated
      const isAuthenticated = await auth0.isAuthenticated();
      setIsAuthenticated(isAuthenticated);

      //   go grab the user
      if (isAuthenticated) {
        const user = await auth0.getUser();
        setUser(user);
      }

      setIsLoading(false);
    };

    initAuth0();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Auth0Context.Provider
      value={{
        isAuthenticated,
        user,
        isLoading,
        login: (...args) => auth0Client.loginWithRedirect(...args),
        logout: (...args) => auth0Client.logout(...args),
        getToken: (...args) => auth0Client.getTokenSilently(...args),
      }}
    >
      {children}
    </Auth0Context.Provider>
  );
};
