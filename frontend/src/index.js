import React from "react";
import ReactDOM from "react-dom";

import {
    RouterProvider
  } from "react-router-dom";
import customRoute from "./product-route.js";
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux';
import store from "./redux/eshopstore.js";

import { CookiesProvider } from 'react-cookie';

const rootelement = ReactDOM.createRoot(document.getElementById('root'))
rootelement.render(
  <Provider store={store}>
    <CookiesProvider defaultSetOptions={{ path: '/' }}>
        <RouterProvider router={customRoute}/>
    </CookiesProvider>
  </Provider>
)