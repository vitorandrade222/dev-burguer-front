import React from 'react';
import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import { RouterProvider } from 'react-router-dom'

import { router } from './routes'
import AppProvider from './hooks'

import GlobalStyles from './styles/GlobalStyles.js';
import stripePromise from './config/stripeConfig.js'
import { Elements } from '@stripe/react-stripe-js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider>
      <Elements stripe={stripePromise}>
        <RouterProvider router={router} />
      </Elements>
      <GlobalStyles />
      <ToastContainer theme='dark' autoClose={2000} />
    </AppProvider>
  </React.StrictMode>,
);
