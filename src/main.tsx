import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import ReactGA from 'react-ga4';

import App from './App.tsx';

if (import.meta.env.PROD && import.meta.env.VITE_GTM_ID) {
  ReactGA.initialize(import.meta.env.VITE_GTM_ID);
  ReactGA.send({ hitType: 'pageview', page: '/', title: document.title });
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
