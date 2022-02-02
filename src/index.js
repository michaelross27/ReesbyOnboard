import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { createBrowserHistory } from "history";

import {createStore, applyMiddleware} from 'redux';
import { Provider } from "react-redux";
import thunk from 'redux-thunk';
import rootReducer from "./reducers";
import { fetchPosts } from "./actions/post.actions";

const store = createStore(rootReducer, applyMiddleware(thunk))

store.dispatch(fetchPosts());


export const history = createBrowserHistory({forceRefresh: true})
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
