import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom"
import Context from './Context';

import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
  domain="dev-7wa7yc4xpz6q5e1s.us.auth0.com"
  clientId="lxl9NJYdFVbd5W4FJqrVHwVQKlvoKVpO"
  authorizationParams={{
    redirect_uri: window.location.origin
  }}>
  <React.StrictMode>
    <BrowserRouter>
    <Context>
      <App />
    </Context>
    </BrowserRouter>
  </React.StrictMode>
  </Auth0Provider>
);


