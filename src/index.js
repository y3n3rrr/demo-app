import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { BrowserRouter } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
//Birlestirilen reducllerin tutuldugu objesi
import reducers from './store/index'
//Store objesini react uygulamamiza baglamak icin kullandigimiz component
import { Provider } from 'react-redux'
//React uygulamasina baglanan store objesini yaratan fonksiyon
import {createStore} from 'redux'

const root = ReactDOM.createRoot(document.getElementById("root1"));

const store = createStore(reducers)

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
