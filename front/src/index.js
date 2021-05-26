import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles/custom.scss";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { IntlProvider } from "react-intl";
import { LOCALES } from "./i18n/locales";
import translations from "./i18n/messages";
const locale = LOCALES.SPANISH
console.log(translations[locale]);
ReactDOM.render(
    <App />,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
