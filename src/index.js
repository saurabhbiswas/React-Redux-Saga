import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./js/store/index";
import App from "./App.js";
import ErrorBoundary from './js/components/ErrorBoundary';


render(
  <Provider store={store}>
  <ErrorBoundary>
    <App />
   </ErrorBoundary>
  </Provider>,
 document.getElementById("root")
);
