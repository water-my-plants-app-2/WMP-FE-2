import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
// import axios from 'axios';

// CSS reset
import "./index.css";

// Component
import App from "./App";

// MiddleWare
import thunk from "redux-thunk";
import logger from "redux-logger";

// Reducers
import { UserReducer } from "./store/reducers/UserReducer.js";
import rootReducer from './store/reducers/plantReducer';

// axios.defaults.withCredentials = true;


// let store;
// if (process.env.NODE_ENV === "development") {
//   store = createStore(UserReducer, applyMiddleware(thunk, logger));
// } else {
//   store = createStore(UserReducer, applyMiddleware(thunk));
// }

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk, logger))
)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route path="/" component={App} />
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
