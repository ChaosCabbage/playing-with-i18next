import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { reduce } from './redux';
import { Provider } from "react-redux";

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
      translation: {
        "thing": "TRANSLATED"
      }
    }
  };
i18n.use(initReactI18next).init({
    resources,
    lng: "en",
    debug: true
})

const store = createStore(reduce);

ReactDOM.render(
    <Provider store={store}><App/></Provider>, 
    document.getElementById('root')
);
