import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./Signup";
import Home from "./Home";
import Example, { ThemeProvider } from "./Example";
import ErrorBoundary from "./ErrorBoundary";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <ThemeProvider> */}
      <Router>
        <ErrorBoundary>
        <Routes>
          <Route path="/" element={<App />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/ex" element={<Example />}></Route>
        </Routes>
        </ErrorBoundary>
      </Router>
      {/* </ThemeProvider> */}
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
