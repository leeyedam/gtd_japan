import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./assets/fonts/Font.css";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import { HelmetProvider } from "react-helmet-async";
import { Provider } from "react-redux";
import { legacy_createStore } from "redux";
import rootReducer from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={legacy_createStore(rootReducer)}>
      <HelmetProvider>
        <BrowserRouter>
          <ScrollToTop />
          <App />
        </BrowserRouter>
      </HelmetProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
